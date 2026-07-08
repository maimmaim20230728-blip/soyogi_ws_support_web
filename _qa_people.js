/* _qa_people.js — people(偉人ノート)の品質QA。実行: node _qa_people.js [dumpdir] */
const fs = require('fs'), path = require('path');
global.window = {};
const dir = __dirname;
function load(f){ eval(fs.readFileSync(path.join(dir, f), 'utf8')); }
load('i18n.js');
const CODES = ['ja','en','de','fr','it','es','ko','sv','nl'];
CODES.forEach(c => load('content.' + c + '.js'));
const C = global.window.SOYOGI_WS_CONTENT;
const dump = process.argv[2];

const DIM = [0,31,29,31,30,31,30,31,31,30,31,30,31]; // 2月は29許容(閏)
let issues = 0;
const flag = (code,i,o,msg) => { issues++; if(issues<=400) console.log(`[${code}] p#${i} (${o.month}/${o.day} ${o.type}) ${msg}\n     ${o.name} | ${o.note}`); };

// 年抽出(note中の4桁年)
function yearOf(note){ const m = (note||'').match(/(1[0-9]{3}|20[0-9]{2}|[6-9][0-9]{2})/); return m?parseInt(m[1],10):null; }

const perLang = {};
CODES.forEach(code => {
  const arr = (C[code] && C[code].people) || [];
  const seen = {};
  arr.forEach((o,i) => {
    const nm = o.name||'', nt = o.note||'';
    if (!nm) flag(code,i,o,'name欠け');
    if (!nt) flag(code,i,o,'note欠け');
    if (/�/.test(nm+nt)) flag(code,i,o,'文字化け(U+FFFD)');
    if (/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(nm+nt)) flag(code,i,o,'制御文字');
    if (/^\s|\s$/.test(nm) || /^\s|\s$/.test(nt)) flag(code,i,o,'前後空白');
    if (/ {2,}/.test(nt)) flag(code,i,o,'連続スペース');
    if (/[\"\\]/.test(nt)) flag(code,i,o,'生の二重引用符/バックスラッシュ');
    if (/(«[^»]*$)|(^[^«]*»)/.test(nt)) flag(code,i,o,'«»対応不一致の疑い');
    if (o.type!=='birth' && o.type!=='death') flag(code,i,o,'type不正: '+o.type);
    if (!(o.month>=1&&o.month<=12)) flag(code,i,o,'month不正');
    else if (!(o.day>=1&&o.day<=DIM[o.month])) flag(code,i,o,'day不正');
    // note末尾(ja/koは。/다等、他は.)
    const last = nt.slice(-1);
    const okEnd = (code==='ja') ? ['。','）','!','？'].includes(last)
                : (code==='ko') ? ['.','다','요',')','!','?'].includes(last)
                : ['.','!','?','»',')'].includes(last);
    if (nt && !okEnd) flag(code,i,o,'note文末が想定終端でない: "'+last+'"');
    // 年が入っているか(誕生/命日ノートは基本西暦を含む想定)
    if (nt && yearOf(nt)===null) flag(code,i,o,'noteに西暦が見当たらない');
    // 重複(同月日+type+name)
    const key = o.month+'/'+o.day+'/'+o.type+'/'+nm;
    if (seen[key]) flag(code,i,o,'完全重複');
    seen[key]=1;
  });
  perLang[code] = arr;
  console.log(`--- ${code}: people ${arr.length}件`);
});

// de派生7言語の index整合(同順=同一人物想定)と 年号一致チェック
const grp = ['de','fr','it','es','ko','sv','nl'];
const base = perLang['de'];
console.log(`\n=== de派生グループ index整合/年号一致チェック(基準=de ${base.length}件) ===`);
let aligned = true;
grp.forEach(code => { if (perLang[code].length !== base.length) { aligned=false; console.log(`  !長さ不一致: ${code}=${perLang[code].length} vs de=${base.length}`); } });
if (aligned) {
  let mism = 0, dmism = 0;
  for (let i=0;i<base.length;i++){
    // 日付/type整合
    grp.forEach(code=>{
      const a=base[i], b=perLang[code][i];
      if (a.month!==b.month||a.day!==b.day||a.type!==b.type){ if(dmism<40) console.log(`  日付/type不一致 idx${i}: de=${a.month}/${a.day}/${a.type}(${a.name}) ${code}=${b.month}/${b.day}/${b.type}(${b.name})`); dmism++; }
    });
    // 年号整合(de基準)
    const y0 = yearOf(base[i].note);
    grp.forEach(code=>{
      if(code==='de')return;
      const y = yearOf(perLang[code][i].note);
      if (y0!==null && y!==null && y!==y0){ if(mism<80) console.log(`  年号不一致 idx${i} [${base[i].name}]: de=${y0} / ${code}=${y} (${perLang[code][i].name})`); mism++; }
    });
  }
  console.log(`  → 日付/type不一致 ${dmism}件 / 年号不一致 ${mism}件`);
}
console.log(issues ? ('\n>>> per-lang要確認 '+issues+'件') : '\n>>> per-lang機械チェック:問題なし');

if (dump){
  CODES.forEach(code=>{
    const arr = perLang[code];
    const lines = arr.map((o,i)=>`#${String(i).padStart(4,'0')} ${String(o.month).padStart(2,'0')}/${String(o.day).padStart(2,'0')} ${o.type==='birth'?'誕':'没'} ${o.name} | ${o.note}`);
    fs.writeFileSync(path.join(dump,`ppl_${code}.txt`), `=== ${code} people ${arr.length} ===\n`+lines.join('\n')+'\n','utf8');
  });
  console.log('dumped ppl_*.txt');
}
