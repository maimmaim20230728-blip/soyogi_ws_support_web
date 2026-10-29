/*
 * gen-rokuyo.js：六曜(大安・仏滅など)のコンパクトな早見表 rokuyo.js を生成する。
 * 六曜 = (旧暦の月 + 旧暦の日) を 6 で割った余り（0=大安,1=赤口,2=先勝,3=友引,4=先負,5=仏滅）。
 *
 * 旧暦の月の番号（閏月を含む）は lunar-javascript の月の並びを使う。
 * ただし lunar-javascript は中国の暦で、朔（新月）の日を北京時間（UTC+8）で決める。
 * 日本の旧暦は日本時間（UTC+9）で決めるので、朔が日本時間の 0時台（北京では前の日の 23時台）に
 * 当たる月は、日本の旧暦の 1日が 1日遅れる。そこで各月の 1日は、lunar-javascript 内部の
 * 高精度の朔の式（ShouXingUtil.msaLonT。寿星万年暦と同じもの）で朔の瞬間を求め、日本時間の日付で決め直す。
 * （2026-10-30 直し: 2026年10月の朔は日本時間 10/11 0:50。直す前は 10/10 を旧9月1日にしていて、
 *   2026/10/30 を「大安」と出していた。国立天文台の暦要項では旧9月20日=「仏滅」。）
 *
 * 実行（lunar-javascript は scratch 等に `npm i lunar-javascript` 済みとして NODE_PATH で借用）:
 *   $env:NODE_PATH="<...>/scratchpad/node_modules"; node gen-rokuyo.js
 * 出力: rokuyo.js（2025〜2040年・各日の六曜インデックス文字列＋get()関数）。オフライン・軽量。
 */
const { Solar, LunarYear, ShouXingUtil } = require('lunar-javascript');
const fs = require('fs');
const path = require('path');

const START = 2025, END = 2040;
const JST = 9 / 24; // 日本時間（J2000 起点の日数に足す）

// 朔の瞬間（日本時間・J2000 起点の日数）。k は lunar-javascript と同じ数え方の朔の番号。
function shuoJst(k) {
  let t = ShouXingUtil.msaLonT(k * Math.PI * 2) * 36525; // 力学時
  return t - ShouXingUtil.dtT(t) + JST;                  // 世界時 → 日本時間
}

// 中国の暦の 1日（ユリウス日・整数）に対応する、日本時間の朔の日（ユリウス日・整数）と朔の瞬間
function jstFirstDay(cnFirstJd) {
  const cnDay = cnFirstJd - Solar.J2000;
  let k = Math.round((cnDay - shuoJst(0)) / 29.530588853);
  let t = shuoJst(k);
  while (t - cnDay > 15) t = shuoJst(--k);
  while (cnDay - t > 15) t = shuoJst(++k);
  const day = Math.floor(t + 0.5);
  if (day - cnDay !== 0 && day - cnDay !== 1) {
    throw new Error('朔の日が中国の暦と 2日以上ずれた: ' + cnFirstJd + ' → ' + (day + Solar.J2000));
  }
  return { jd: day + Solar.J2000, t: t };
}

// 月の並び（前後 1年ずつ余分に取って、重なりは 1日の日付で除く）
const months = [];
const seen = {};
for (let y = START - 1; y <= END + 1; y++) {
  LunarYear.fromYear(y).getMonths().forEach(function (m) {
    const cn = m.getFirstJulianDay();
    if (seen[cn]) return;
    seen[cn] = true;
    const j = jstFirstDay(cn);
    months.push({ month: m.getMonth(), cnFirst: cn, first: j.jd, shuo: j.t });
  });
}
months.sort(function (a, b) { return a.first - b.first; });

function jdOf(y, m, d) { return Math.floor(Solar.fromYmd(y, m, d).getJulianDay() + 0.5); }

// その日の旧暦（月の番号は負なら閏月）
function lunarOf(y, m, d) {
  const jd = jdOf(y, m, d);
  let lo = 0, hi = months.length - 1;
  if (jd < months[0].first || jd >= months[hi].first) throw new Error('月の並びの外: ' + y + '-' + m + '-' + d);
  while (lo < hi) { // first <= jd の最後の月
    const mid = (lo + hi + 1) >> 1;
    if (months[mid].first <= jd) lo = mid; else hi = mid - 1;
  }
  return { month: months[lo].month, day: jd - months[lo].first + 1, info: months[lo] };
}

function idxOf(y, m, d) {
  const l = lunarOf(y, m, d);
  return (Math.abs(l.month) + l.day) % 6; // 0..5
}

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
 * rokuyo.js：六曜の早見表（${START}〜${END}年）。gen-rokuyo.js で自動生成。手で編集しない。
 * 六曜=(旧暦月+旧暦日)%6（0=大安,1=赤口,2=先勝,3=友引,4=先負,5=仏滅）。
 * 旧暦の 1日は日本時間の朔の日で決める（国立天文台の暦要項と照合済み）。
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

if (require.main === module) {
  fs.writeFileSync(path.join(__dirname, 'rokuyo.js'), js);
  console.log('wrote rokuyo.js  (' + (END - START + 1) + ' years, ' + js.length + ' bytes)');
  // 検算表示
  ['2026-7-6', '2026-1-1', '2026-1-6', '2026-10-10', '2026-10-11', '2026-10-30', '2026-12-31'].forEach(function (s) {
    var p = s.split('-').map(Number);
    console.log(s, '=>', NAMES[idxOf(p[0], p[1], p[2])]);
  });
  // 中国の暦と 1日がずれる月（朔が日本時間の 0時台）
  months.forEach(function (m) {
    if (m.first !== m.cnFirst) {
      var s = Solar.fromJulianDay(m.first);
      console.log('日本時間で 1日が遅れる月:', s.toYmd(), '旧' + (m.month < 0 ? '閏' : '') + Math.abs(m.month) + '月');
    }
  });
}

module.exports = { months: months, lunarOf: lunarOf, idxOf: idxOf, shuoJst: shuoJst, data: data, START: START, END: END };
