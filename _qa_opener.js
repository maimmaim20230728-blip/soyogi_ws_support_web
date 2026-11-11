/*
 * _qa_opener.js — 「今日は何の日」の話しかけ方(opener)と 9言語の content を確かめる QA。
 *   実行: node _qa_opener.js [index.html と content のあるフォルダ]  （依存なし・素の Node・ブラウザ不使用）
 *   1) 9言語の content を読み込み: 構文・クイズ38問・id 重複なし・answerIndex 範囲内・opener は文字列
 *   2) index.html の描画コードを取り出し、小さな疑似 DOM で
 *      opener のある項目 → その opener / ない項目 → 汎用 topicOpeners、を確かめる
 */
const fs = require('fs');
const path = require('path');
const dir = process.argv[2] ? path.resolve(process.argv[2]) : __dirname;
const errors = [];
const err = m => errors.push(m);

global.window = {};
eval(fs.readFileSync(path.join(dir, 'i18n.js'), 'utf8'));
const I18N = window.SOYOGI_WS_I18N;
const CODES = ['ja', 'en', 'de', 'fr', 'it', 'es', 'ko', 'sv', 'nl'];
CODES.forEach(c => {
  try { eval(fs.readFileSync(path.join(dir, 'content.' + c + '.js'), 'utf8')); }
  catch (e) { err(c + ': 構文エラー ' + e.message); }
});
const C = window.SOYOGI_WS_CONTENT || {};

let openerCount = 0;
CODES.forEach(c => {
  const k = C[c];
  if (!k) { err(c + ': content がない'); return; }
  const qs = k.quizzes || [];
  if (qs.length !== 38) err(c + ': クイズ ' + qs.length + ' 問(38 のはず)');
  const ids = new Set();
  qs.forEach((q, i) => {
    if (!q.id) err(c + ': quizzes[' + i + '] id なし');
    else if (ids.has(q.id)) err(c + ': id 重複 ' + q.id); else ids.add(q.id);
    const n = (q.choices || []).length;
    if (!(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < n))
      err(c + ': ' + q.id + ' answerIndex 範囲外 ' + q.answerIndex + '/' + n);
  });
  (k.onThisDay || []).forEach((o, i) => {
    if ('opener' in o) {
      openerCount++;
      if (typeof o.opener !== 'string' || !o.opener.trim()) err(c + ': onThisDay[' + i + '] opener が文字列でない/空');
      else if (/[—–]/.test(o.opener)) err(c + ': onThisDay[' + i + '] opener にダッシュ');
    }
  });
});

// ---- 描画の確かめ(疑似 DOM) ----
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const start = html.indexOf('var openers=t("topicOpeners")');
const end = html.indexOf('/* 今日の著名人', start);
if (start < 0 || end < 0) err('index.html: 描画コードが見つからない');
else {
  const code = html.slice(start, end);
  function mk(tag) { return { tag, className: '', textContent: '', children: [], appendChild(x) { this.children.push(x); } }; }
  function render(lang, picks, d) {
    const list = mk('div');
    const document = { createElement: mk };
    const ui = I18N.ui[lang];
    const t = k => ui[k];
    new Function('document', 'lang', 'picks', 'd', 't', 'list', code)(document, lang, picks, d, t, list);
    return list.children.map(r => {
      const op = r.children[1].children.find(x => x.className === 'otd-opener');
      return op ? op.textContent : null;
    });
  }
  CODES.forEach(lang => {
    const ui = I18N.ui[lang];
    const sep = lang === 'ja' ? '：' : (lang === 'fr' ? ' : ' : ': ');
    const pre = '💬 ' + ui.topicOpenerLabel + sep;
    const items = (C[lang].onThisDay || []);
    const withOp = items.find(o => typeof o.opener === 'string');
    const noOp = items.find(o => !('opener' in o) && o.year != null) || items.find(o => !('opener' in o));
    const picks = [withOp, noOp].filter(Boolean);
    const out = render(lang, picks, 11);
    picks.forEach((o, i) => {
      if (o.opener) {
        if (out[i] !== pre + o.opener) err(lang + ': opener のある日に opener が出ない: ' + out[i]);
      } else {
        const ops = ui.topicOpeners;
        const exp = pre + ops[(i + 11) % (o.year != null ? Math.min(2, ops.length) : ops.length)];
        if (out[i] !== exp) err(lang + ': opener のない日に汎用の言葉が出ない: ' + out[i]);
      }
    });
    if (!withOp) err(lang + ': opener のある項目がない');
  });
  // 汎用の言葉が無くても opener は出る
  const saved = I18N.ui.ja.topicOpeners; I18N.ui.ja.topicOpeners = [];
  const o2 = render('ja', [{ month: 1, day: 1, year: 2000, text: 'x', opener: 'テスト' }, { month: 1, day: 1, year: 2000, text: 'y' }], 1);
  I18N.ui.ja.topicOpeners = saved;
  if (o2[0] == null || !o2[0].endsWith('テスト') || o2[1] !== null) err('汎用の言葉が空のときの表示がおかしい: ' + JSON.stringify(o2));
}

console.log('opener 付きの項目: ' + openerCount + ' 件');
if (errors.length) { errors.forEach(e => console.log('NG ' + e)); console.log(errors.length + ' ERROR(S)'); process.exit(1); }
console.log('ALL OK');
