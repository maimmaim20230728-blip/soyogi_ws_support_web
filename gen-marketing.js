/*
 * gen-marketing.js — マーケ画像を生成（テキスト入り・sharp/rsvgでCJK描画OK）。
 *   $env:NODE_PATH="C:\\Users\\puipu\\wise_world\\node_modules"; node gen-marketing.js
 * 出力:
 *   icons/farcaster-embed.png       … Farcaster feedカード 1200x800 (3:2)
 *   store/feature-graphic.png       … Google Play フィーチャーグラフィック 1024x500
 *   store/play-icon-512.png         … Play ストアアイコン 512（icon-512 と同一デザイン）
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const iconsDir = path.join(dir, 'icons');
const storeDir = path.join(dir, 'store');
fs.mkdirSync(storeDir, { recursive: true });

const FONT = "Yu Gothic, Meiryo, 'Noto Sans JP', sans-serif";

// マーク（icon.svg と同じ：両手のゆりかご＋ハート＝福祉従事者を支える）
const LEAF = `
    <path d="M0 92 C-60 44 -104 4 -104 -46 C-104 -76 -80 -98 -50 -98 C-26 -98 -8 -84 0 -64 C8 -84 26 -98 50 -98 C80 -98 104 -76 104 -46 C104 4 60 44 0 92 Z" fill="url(#heart)"/>
    <path d="M-150 4 C-120 132 120 132 150 4 C110 74 -110 74 -150 4 Z" fill="url(#hand)"/>
    <circle cx="-146" cy="0" r="22" fill="url(#hand)"/>
    <circle cx="146" cy="0" r="22" fill="url(#hand)"/>`;

const DEFS = `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#54b493"/><stop offset="1" stop-color="#2b7458"/>
    </linearGradient>
    <linearGradient id="hand" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4fff9"/><stop offset="1" stop-color="#cdeede"/>
    </linearGradient>
    <linearGradient id="heart" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffc2ad"/><stop offset="1" stop-color="#ef7f61"/>
    </linearGradient>
  </defs>`;

// Farcaster カード 1200x800（3:2）
const farcaster = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  ${DEFS}
  <rect width="1200" height="800" fill="url(#bg)"/>
  <g transform="translate(1010 660) scale(2.4)" opacity="0.08">${LEAF}</g>
  <g transform="translate(600 190) scale(1.1)">${LEAF}</g>
  <text x="600" y="412" font-family="${FONT}" font-size="76" font-weight="800" fill="#ffffff" text-anchor="middle">福祉サポーターズ・サポート</text>
  <text x="600" y="470" font-family="${FONT}" font-size="33" fill="#dff3ea" text-anchor="middle">― 高齢者版 ―</text>
  <text x="600" y="552" font-family="${FONT}" font-size="42" font-weight="700" fill="#ffffff" text-anchor="middle">会話の、お守りに。</text>
  <text x="600" y="614" font-family="${FONT}" font-size="28" fill="#bfe6d5" text-anchor="middle">介護・医療スタッフのための会話サポート</text>
  <text x="600" y="700" font-family="${FONT}" font-size="25" fill="#cfe9dd" text-anchor="middle">アプリ開発：介護と支援の相談どころ・そよぎ</text>
</svg>`;

// Google Play フィーチャーグラフィック 1024x500
const feature = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 500" width="1024" height="500">
  ${DEFS}
  <rect width="1024" height="500" fill="url(#bg)"/>
  <g transform="translate(930 430) scale(1.7)" opacity="0.08">${LEAF}</g>
  <g transform="translate(200 250) scale(1.0)">${LEAF}</g>
  <text x="410" y="168" font-family="${FONT}" font-size="54" font-weight="800" fill="#ffffff">福祉サポーターズ</text>
  <text x="410" y="228" font-family="${FONT}" font-size="54" font-weight="800" fill="#ffffff">・サポート</text>
  <text x="410" y="286" font-family="${FONT}" font-size="27" fill="#dff3ea">高齢者版 ／ 会話の、お守りに。</text>
  <text x="410" y="344" font-family="${FONT}" font-size="24" fill="#bfe6d5">介護・医療スタッフのための会話サポートアプリ</text>
  <text x="410" y="402" font-family="${FONT}" font-size="21" fill="#cfe9dd">アプリ開発：介護と支援の相談どころ・そよぎ</text>
</svg>`;

// Play ストアアイコン（角丸・icon.svg と同デザイン、512）
const storeIcon = fs.readFileSync(path.join(iconsDir, 'icon.svg'));

(async () => {
  await sharp(Buffer.from(farcaster)).png().toFile(path.join(iconsDir, 'farcaster-embed.png'));
  console.log('wrote icons/farcaster-embed.png 1200x800');
  await sharp(Buffer.from(feature)).png().toFile(path.join(storeDir, 'feature-graphic.png'));
  console.log('wrote store/feature-graphic.png 1024x500');
  await sharp(Buffer.from(storeIcon), { density: 384 }).resize(512, 512).png().toFile(path.join(storeDir, 'play-icon-512.png'));
  console.log('wrote store/play-icon-512.png 512x512');
  console.log('marketing done');
})().catch(e => { console.error('ERROR:', e); process.exit(1); });
