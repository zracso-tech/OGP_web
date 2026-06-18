import sharp from 'sharp';

const FILE = 'public/images/oscar-pro.png';
const TMP = 'public/images/_oscar-pro-tmp.png';

const W = 64, H = 72;
const SRC = { left: 551, top: 815, width: W, height: H };   // tela limpia (encima)
const DST = { left: 551, top: 885 };                          // sobre la estrella

// Parche de origen (tela limpia)
const srcRaw = await sharp(FILE).extract(SRC).ensureAlpha().raw().toBuffer();

// Máscara radial: núcleo opaco hasta 70%, luego difumina
const maskSvg = `<svg width="${W}" height="${H}"><defs><radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="70%" stop-color="#fff"/><stop offset="100%" stop-color="#000"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/></svg>`;
const mask = await sharp(Buffer.from(maskSvg)).greyscale().raw().toBuffer();

// Sustituye el canal alfa del parche por la máscara difuminada
const patch = Buffer.from(srcRaw);
for (let i = 0; i < W * H; i++) patch[i * 4 + 3] = mask[i];
const patchPng = await sharp(patch, { raw: { width: W, height: H, channels: 4 } }).png().toBuffer();

// Componer el parche sobre la imagen
await sharp(FILE).composite([{ input: patchPng, left: DST.left, top: DST.top }]).png().toFile(TMP);

import { renameSync } from 'node:fs';
renameSync(TMP, FILE);
console.log('✓ Estrella retocada');
