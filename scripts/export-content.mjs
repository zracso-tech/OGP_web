// Exporta el contenido actual (content.js) a JSON, espejo exacto.
// Uso puntual para la migración a Keystatic. Se puede borrar después.
import { writeFileSync } from 'node:fs';
import { content, PROFILE } from '../src/lib/content.js';

writeFileSync('src/data/site/es.json', JSON.stringify(content.es, null, 2) + '\n');
writeFileSync('src/data/site/en.json', JSON.stringify(content.en, null, 2) + '\n');
writeFileSync('src/data/site/profile.json', JSON.stringify(PROFILE, null, 2) + '\n');

console.log('OK: es.json, en.json, profile.json exportados');
