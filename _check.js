/*
 * _check.js — 全 content.<code>.js と i18n.js の構造整合を機械検査する QA スクリプト。
 *   実行: node _check.js   （依存なし・素の Node）
 * 検出対象: フィールド欠け / answerIndex 範囲外 / id 重複 / 花の月抜け・重複 /
 *   genre の未定義 / cue(open/asks/expand/care) 欠け / i18n キー不足 など。
 * 出力の最後に「ALL OK」または「N ERROR(S)」。
 */
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// window シムを用意して各ファイルを評価
global.window = {};
function load(f){ eval(fs.readFileSync(path.join(dir, f), 'utf8')); }
load('i18n.js');

const I18N = global.window.SOYOGI_WS_I18N;
const langInMenu = I18N.langs.map(l => l.code);
const ALL_CODES = ['ja','en','de','fr','it','es','ko','sv','nl'];
ALL_CODES.forEach(c => { try { load('content.' + c + '.js'); } catch (e) { /* report below */ } });
const CONTENT = global.window.SOYOGI_WS_CONTENT || {};

const GENRES = Object.keys((I18N.ui.en && I18N.ui.en.genres) || {});
const UI_KEYS = Object.keys(I18N.ui.en || {}).filter(k => k !== 'genres');

const errors = [];
const warns = [];
const err = (code, msg) => errors.push('[' + code + '] ' + msg);
const warn = (code, msg) => warns.push('[' + code + '] ' + msg);

// ---- i18n 検査 ----
Object.keys(I18N.ui).forEach(code => {
  const ui = I18N.ui[code];
  // キーの「存在」で判定（reviewNote は原語=ja で意図的に null のため）
  UI_KEYS.forEach(k => { if (!(k in ui)) err(code, 'i18n キー不足: ' + k); });
  const g = ui.genres || {};
  GENRES.forEach(k => { if (g[k] == null) err(code, 'i18n genres 不足: ' + k); });
});

// ---- content 検査 ----
const summary = [];
ALL_CODES.forEach(code => {
  const c = CONTENT[code];
  if (!c) { err(code, 'content パック未ロード（構文エラー等）'); return; }

  // flowers: 1..12 各月に最低1件（同月複数=日替わり用はOK）
  const months = (c.flowers || []).map(f => f.month);
  for (let m = 1; m <= 12; m++) {
    if (months.filter(x => x === m).length === 0) err(code, 'flowers: ' + m + '月が無い');
  }
  (c.flowers || []).forEach((f, i) => {
    ['name','emoji','meaning','note'].forEach(k => { if (!f[k]) err(code, 'flowers[' + i + '] ' + k + ' 欠け'); });
  });

  // onThisDay
  if (!(c.onThisDay || []).length) warn(code, 'onThisDay が空');
  (c.onThisDay || []).forEach((o, i) => {
    if (!(o.month >= 1 && o.month <= 12)) err(code, 'onThisDay[' + i + '] month 不正: ' + o.month);
    if (!(o.day >= 1 && o.day <= 31)) err(code, 'onThisDay[' + i + '] day 不正: ' + o.day);
    if (o.year !== null && typeof o.year !== 'number') err(code, 'onThisDay[' + i + '] year 不正（数値または null）');
    if (!o.text) err(code, 'onThisDay[' + i + '] text 欠け');
    if (!o.emoji) err(code, 'onThisDay[' + i + '] emoji 欠け');
  });

  // quizzes
  const ids = {};
  (c.quizzes || []).forEach((q, i) => {
    const tag = 'quizzes[' + i + ']' + (q.id ? '(' + q.id + ')' : '');
    if (!q.id) err(code, tag + ' id 欠け');
    else { if (ids[q.id]) err(code, 'id 重複: ' + q.id); ids[q.id] = 1; }
    if (!q.genre) err(code, tag + ' genre 欠け');
    else if (GENRES.indexOf(q.genre) < 0) err(code, tag + ' 未定義 genre: ' + q.genre);
    if (!q.emoji) err(code, tag + ' emoji 欠け');
    if (!q.question) err(code, tag + ' question 欠け');
    if (!Array.isArray(q.choices) || q.choices.length < 2) err(code, tag + ' choices が2件未満');
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex >= (q.choices || []).length)
      err(code, tag + ' answerIndex 範囲外: ' + q.answerIndex);
    if (!q.trivia) err(code, tag + ' trivia 欠け');
    // cue（構造化） or staffCue（旧・文字列）
    if (q.cue) {
      ['open','expand','care'].forEach(k => { if (!q.cue[k]) err(code, tag + ' cue.' + k + ' 欠け'); });
      if (!Array.isArray(q.cue.asks) || q.cue.asks.length < 2) err(code, tag + ' cue.asks が2件未満');
    } else if (typeof q.staffCue !== 'string' || !q.staffCue) {
      err(code, tag + ' cue も staffCue も無い');
    }
  });

  // eitherOr
  (c.eitherOr || []).forEach((e, i) => {
    const tag = 'eitherOr[' + i + ']';
    if (!e.id) err(code, tag + ' id 欠け');
    ['left','right'].forEach(s => {
      if (!e[s] || !e[s].label || !e[s].emoji) err(code, tag + ' ' + s + '{label,emoji} 欠け');
    });
    if (!e.staffCue) err(code, tag + ' staffCue 欠け');
  });

  // colorTest
  const ct = c.colorTest;
  if (!ct || !Array.isArray(ct.options) || ct.options.length < 3) err(code, 'colorTest options が3件未満');
  else ct.options.forEach((o, i) => {
    ['key','label','emoji','color','result'].forEach(k => { if (!o[k]) err(code, 'colorTest.options[' + i + '] ' + k + ' 欠け'); });
  });

  // people（著名人・任意）: フィールド欠け＋完全重複を検出
  const pseen = {};
  (c.people || []).forEach((p, i) => {
    const tag = 'people[' + i + ']' + (p.name ? '(' + p.name + ')' : '');
    if (!p.name) err(code, tag + ' name 欠け');
    if (!p.note) err(code, tag + ' note 欠け');
    if (p.type !== 'birth' && p.type !== 'death') err(code, tag + ' type は birth/death のみ: ' + p.type);
    if (!(p.month >= 1 && p.month <= 12)) err(code, tag + ' month 不正: ' + p.month);
    if (!(p.day >= 1 && p.day <= 31)) err(code, tag + ' day 不正: ' + p.day);
    const key = p.name + '|' + p.type + '|' + p.month + '|' + p.day;
    if (pseen[key]) err(code, '著名人の重複: ' + key);
    pseen[key] = 1;
  });

  const drafted = (c.onThisDay || []).some(o => o._verify);
  summary.push(
    code.padEnd(3) +
    ' | menu:' + (langInMenu.indexOf(code) >= 0 ? '公開' : '下書き') +
    ' | flowers:' + (c.flowers || []).length +
    ' otd:' + (c.onThisDay || []).length +
    ' quiz:' + (c.quizzes || []).length +
    ' eo:' + (c.eitherOr || []).length +
    ' color:' + ((ct && ct.options) || []).length +
    ' people:' + (c.people || []).length +
    (drafted ? ' | ⚠ 史実 _verify 未検証' : '')
  );
});

console.log('=== languages ===');
console.log('menu(公開): ' + langInMenu.join(', '));
console.log('packs      : ' + Object.keys(CONTENT).join(', '));
console.log('\n=== per-language summary ===');
summary.forEach(s => console.log(s));
if (warns.length) { console.log('\n=== warnings ==='); warns.forEach(w => console.log('  ! ' + w)); }
console.log('\n=== result ===');
if (errors.length) { errors.forEach(e => console.log('  ✗ ' + e)); console.log('\n' + errors.length + ' ERROR(S)'); process.exit(1); }
else { console.log('ALL OK (' + Object.keys(CONTENT).length + ' packs, ' + Object.keys(I18N.ui).length + ' UI langs)'); }
