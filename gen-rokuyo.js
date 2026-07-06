/*
 * gen-rokuyo.js — 六曜(大安・仏滅など)のコンパクトな早見表 rokuyo.js を生成する。
 * 六曜 = (旧暦の月 + 旧暦の日) を 6 で割った余り（0=大安,1=赤口,2=先勝,3=友引,4=先負,5=仏滅）。
 * 旧暦は lunar-javascript で算出（検証済み: 2026/7/6=友引, 1/1=大安, 1/6=仏滅 …）。
 *
 * 実行（lunar-javascript は scratch 等に `npm i lunar-javascript` 済みとして NODE_PATH で借用）:
 *   $env:NODE_PATH="<...>/scratchpad/node_modules"; node gen-rokuyo.js
 * 出力: rokuyo.js（2025〜2040年・各日の六曜インデックス文字列＋get()関数）。オフライン・軽量。
 */
const { Solar } = require('lunar-javascript');
const fs = require('fs');
const path = require('path');

function idxOf(y, m, d) {
  const l = Solar.fromYmd(y, m, d).getLunar();
  return (Math.abs(l.getMonth()) + l.getDay()) % 6; // 0..5
}

const START = 2025, END = 2040;
const data = {};
for (let y = START; y <= END; y++) {
  let s = '';
  const dt = new Date(y, 0, 1);
  while (dt.getFullYear() === y) {
    s += String(idxOf(y, dt.getMonth() + 1, dt.getDate()));
    dt.setDate(dt.getDate() + 1);
  }
  data[y] = s;
}

const NAMES = ['大安', '赤口', '先勝', '友引', '先負', '仏滅'];
const YOMI  = ['たいあん', 'しゃっこう', 'せんしょう', 'ともびき', 'せんぶ', 'ぶつめつ'];
const MEAN  = [
  '万事に良い日。お祝いごとに好まれるとされます。',
  '昼ごろ（11〜13時）のみ吉とされる日です。',
  '午前は吉、午後は凶とされ、急ぐ用に良いとされます。',
  '朝夕は吉。祝い事は良いが、葬儀は避けるとされます。',
  '午前は控えめに、午後が吉とされる日です。',
  '控えめに過ごすと良いとされる日です。'
];

const js =
`/*
 * rokuyo.js — 六曜の早見表（${START}〜${END}年）。gen-rokuyo.js で自動生成。手で編集しない。
 * 六曜=(旧暦月+旧暦日)%6（0=大安,1=赤口,2=先勝,3=友引,4=先負,5=仏滅）。検証済み。
 */
window.SOYOGI_WS_ROKUYO = (function(){
  "use strict";
  var DATA = ${JSON.stringify(data)};
  var NAMES = ${JSON.stringify(NAMES)};
  var YOMI = ${JSON.stringify(YOMI)};
  var MEAN = ${JSON.stringify(MEAN)};
  function doy(dt){
    var y=dt.getFullYear();
    var feb=((y%4===0&&y%100!==0)||y%400===0)?29:28;
    var md=[31,feb,31,30,31,30,31,31,30,31,30,31], n=0;
    for(var i=0;i<dt.getMonth();i++) n+=md[i];
    return n+dt.getDate()-1;
  }
  function get(dt){
    var s=DATA[dt.getFullYear()]; if(!s) return null;
    var c=s.charAt(doy(dt)); if(c==="") return null;
    var i=parseInt(c,10);
    return { name:NAMES[i], yomi:YOMI[i], meaning:MEAN[i] };
  }
  return { get:get };
})();
`;

fs.writeFileSync(path.join(__dirname, 'rokuyo.js'), js);
console.log('wrote rokuyo.js  (' + (END - START + 1) + ' years, ' + js.length + ' bytes)');
// 検算表示
['2026-7-6', '2026-1-1', '2026-1-6', '2026-12-31'].forEach(function (s) {
  var p = s.split('-').map(Number);
  console.log(s, '=>', NAMES[idxOf(p[0], p[1], p[2])]);
});
