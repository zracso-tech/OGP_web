import sharp from 'sharp';

const jobs = [
  { src: 'C:/Users/Usuario/Mi unidad/0 Work/0 cv/foto blanco.jpeg', out: 'public/images/oscar-pro.png' },
  { src: 'C:/Users/Usuario/Mi unidad/0 Work/0 cv/OGP NEW/Materiales/foto.jpeg', out: 'public/images/oscar-pro-2.png' },
];

const BRIGHT = 222;   // umbral de brillo para considerar "fondo blanco"
const SATMAX = 28;    // saturación máxima (blanco/gris, no piel)

async function cut(src, out) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  const isBg = (p) => {
    const i = p * 4, r = data[i], g = data[i + 1], b = data[i + 2];
    const bright = (r + g + b) / 3;
    const sat = Math.max(r, g, b) - Math.min(r, g, b);
    return bright > BRIGHT && sat < SATMAX;
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

  const alpha = new Uint8Array(w * h).fill(255);
  for (let p = 0; p < w * h; p++) if (visited[p]) alpha[p] = 0;

  // Suavizado de borde: alpha parcial en píxeles conservados con vecinos transparentes
  const out2 = Buffer.from(data);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = y * w + x;
    if (visited[p]) { out2[p * 4 + 3] = 0; continue; }
    let t = 0, n = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const xx = x + dx, yy = y + dy;
      if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
      n++; if (visited[yy * w + xx]) t++;
    }
    out2[p * 4 + 3] = t > 0 ? Math.round(255 * (1 - (t / n) * 0.85)) : 255;
  }

  await sharp(out2, { raw: { width: w, height: h, channels: 4 } }).png().toFile(out);
  const kept = alpha.reduce((a, v) => a + (v > 0 ? 1 : 0), 0);
  console.log(`✓ ${out}  (${w}x${h}, ${Math.round((kept / (w * h)) * 100)}% conservado)`);
}

for (const j of jobs) await cut(j.src, j.out);
