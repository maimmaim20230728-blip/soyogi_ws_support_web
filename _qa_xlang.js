/* _qa_xlang.js — 名前一致による言語横断の(月/日/type)・年号整合チェック(index非依存)。ラテン文字圏 en/de/fr/it/es/sv/nl */
global.window = {};
const fs=require('fs'),path=require('path');
function load(f){ eval(fs.readFileSync(path.join(__dirname,f),'utf8')); }
load('i18n.js');
const G=['en','de','fr','it','es','sv','nl'];
G.forEach(c=>load('content.'+c+'.js'));
const C=global.window.SOYOGI_WS_CONTENT;
function yearOf(note){ const ms=(note||'').match(/1[0-9]{3}|20[0-9]{2}|[6-9][0-9]{2}/g); return ms?ms.map(Number):[]; }
// name -> code -> {type -> {m,d,years}}
const map={};
G.forEach(code=>{
  (C[code].people||[]).forEach(o=>{
    const n=o.name; if(!map[n])map[n]={};
    if(!map[n][code])map[n][code]={};
    map[n][code][o.type]={m:o.month,d:o.day,years:yearOf(o.note)};
  });
});
let dmis=0,ymis=0;
Object.keys(map).sort().forEach(n=>{
  const codes=Object.keys(map[n]);
  if(codes.length<4) return; // 4言語以上で共通の名前だけ対象(確実に同一人物)
  ['birth','death'].forEach(tp=>{
    const present=codes.filter(c=>map[n][c][tp]);
    if(present.length<4) return;
    // 日付整合
    const dates=present.map(c=>map[n][c][tp].m+'/'+map[n][c][tp].d);
    const uniqD=[...new Set(dates)];
    if(uniqD.length>1){ dmis++; console.log(`日付割れ [${n}/${tp}]: `+present.map(c=>`${c}=${map[n][c][tp].m}/${map[n][c][tp].d}`).join(' ')); }
    // 年号整合(各言語のnote先頭年 or 全年集合の共通性)。誕生=最小年, 命日=最大年 を代表に
    const reps=present.map(c=>{const ys=map[n][c][tp].years; if(!ys.length)return null; return tp==='birth'?Math.min(...ys):Math.max(...ys);});
    const uniqY=[...new Set(reps.filter(x=>x!==null))];
    if(uniqY.length>1){ ymis++; console.log(`年号割れ [${n}/${tp}]: `+present.map((c,i)=>`${c}=${reps[i]}`).join(' ')); }
  });
});
console.log(`\n=== 対象(4言語以上共通の人名) 日付割れ ${dmis}件 / 年号割れ ${ymis}件 ===`);
