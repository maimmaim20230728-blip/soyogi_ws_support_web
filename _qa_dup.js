/* _qa_dup.js — 表記違いの重複人物を検出(同一 月/日/type/西暦 で名前だけ違う) 全言語 */
global.window = {};
const fs=require('fs'),path=require('path');
function load(f){ eval(fs.readFileSync(path.join(__dirname,f),'utf8')); }
load('i18n.js');
const CODES=['ja','en','de','fr','it','es','ko','sv','nl'];
CODES.forEach(c=>load('content.'+c+'.js'));
const C=global.window.SOYOGI_WS_CONTENT;
function years(note){ const m=(note||'').match(/1[0-9]{3}|20[0-9]{2}|[6-9][0-9]{2}/g); return m?m.join(','):''; }
CODES.forEach(code=>{
  const arr=C[code].people||[];
  const g={};
  arr.forEach((o,i)=>{
    const key=o.month+'/'+o.day+'/'+o.type+'/'+years(o.note);
    (g[key]=g[key]||[]).push({i,name:o.name});
  });
  let hit=0;
  Object.keys(g).forEach(k=>{
    const names=[...new Set(g[k].map(x=>x.name))];
    if(g[k].length>1 && names.length>1){ // 同日同type同西暦で別名 ⇒ 表記違い重複の疑い
      hit++; console.log(`[${code}] ${k}: `+g[k].map(x=>`#${x.i} ${x.name}`).join(' / '));
    }
  });
  if(hit) console.log(`--- ${code}: 疑い ${hit}件\n`); else console.log(`--- ${code}: なし`);
});
