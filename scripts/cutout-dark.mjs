import sharp from 'sharp';

const SRC = 'src/_src-images/oscar-pro-original.png';
const OUT = 'public/images/oscar-pro.png';

const DARK = 36;    // brillo máximo para considerar "fondo negro"
const SATMAX = 16;  // saturación máxima (negro/gris, no azul marino)

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height;

const isBg = (p) => {
  const i = p * 4, r = data[i], g = data[i + 1], b = data[i + 2];
  const bright = (r + g + b) / 3;
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  // Protege el azul marino (incluso en sombra): si tiene dominante azul, NO es fondo
  const blueish = b > r + 3 && b > 16;
  return bright < DARK && sat < SATMAX && !blueish;
};

const visited = new Uint8Array(w * h);
const stack = [];
const seed = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return;
  const p = y * w + x;
  if (visited[p]) return;
  if (isBg(p)) { visited[p] = 1; stack.push(p); }
};
for (let x = 0; x < w; x++) { seed(x, 0); seed(x, h - 1); }
for (let y = 0; y < h; y++) { seed(0, y); seed(w - 1, y); }
while (stack.length) {
  const p = stack.pop(), x = p % w, y = (p / w) | 0;
  seed(x - 1, y); seed(x + 1, y); seed(x, y - 1); seed(x, y + 1);
}

const out = Buffer.from(data);
for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
  const p = y * w + x;
  if (visited[p]) { out[p * 4 + 3] = 0; continue; }
  let t = 0, n = 0;
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    const xx = x + dx, yy = y + dy;
    if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
    n++; if (visited[yy * w + xx]) t++;
  }
  out[p * 4 + 3] = t > 0 ? Math.round(255 * (1 - (t / n) * 0.85)) : 255;
}

await sharp(out, { raw: { width: w, height: h, channels: 4 } }).png().toFile(OUT);
const kept = visited.reduce((a, v) => a + (v ? 0 : 1), 0);
console.log(`✓ ${OUT}  (${w}x${h}, ${Math.round((kept / (w * h)) * 100)}% conservado)`);
