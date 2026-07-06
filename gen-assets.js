/*
 * gen-assets.js — アイコン/マーケ画像を icon.svg 等から生成する。
 * 実行: NODE_PATH を wise_world の node_modules に向けて sharp を借りる。
 *   PowerShell:  $env:NODE_PATH="C:\\Users\\puipu\\wise_world\\node_modules"; node gen-assets.js
 * ※アイコンはテキスト無し（確実）。マーケ画像(feature/farcaster)は別途テキスト検証。
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const iconsDir = path.join(dir, 'icons');
const iconSvg = fs.readFileSync(path.join(iconsDir, 'icon.svg'));

// マスカブル用（全面塗り・マークは安全域に収める）
const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
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
  </defs>
  <rect width="512" height="512" fill="url(#bg)"/>
  <g transform="translate(256 250) scale(0.72)">
    <path d="M0 92 C-60 44 -104 4 -104 -46 C-104 -76 -80 -98 -50 -98 C-26 -98 -8 -84 0 -64 C8 -84 26 -98 50 -98 C80 -98 104 -76 104 -46 C104 4 60 44 0 92 Z" fill="url(#heart)"/>
    <path d="M-150 4 C-120 132 120 132 150 4 C110 74 -110 74 -150 4 Z" fill="url(#hand)"/>
    <circle cx="-146" cy="0" r="22" fill="url(#hand)"/>
    <circle cx="146" cy="0" r="22" fill="url(#hand)"/>
  </g>
</svg>`;

async function render(input, w, h, out){
  await sharp(Buffer.from(input), { density: 384 })
    .resize(w, h, { fit: 'contain', background: { r:0, g:0, b:0, alpha:0 } })
    .png()
    .toFile(path.join(iconsDir, out));
  console.log('wrote', out, w + 'x' + h);
}

(async () => {
  await render(iconSvg, 512, 512, 'icon-512.png');
  await render(iconSvg, 192, 192, 'icon-192.png');
  await render(iconSvg, 180, 180, 'apple-touch-icon.png');
  await render(maskableSvg, 512, 512, 'maskable-512.png');
  console.log('icons done');
})().catch(e => { console.error('ERROR:', e); process.exit(1); });
