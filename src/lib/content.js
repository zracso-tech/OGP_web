/* ============================================================
   Contenido bilingüe (ES / EN) — Óscar González Pérez

   Los textos ya NO se editan aquí. Se editan en el panel visual:
     · Arranca:  npm run dev
     · Entra en: http://localhost:4321/keystatic
   El panel guarda los cambios en:
     · src/data/site/es.json       (contenido en español)
     · src/data/site/en.json       (contenido en inglés)
     · src/data/site/profile.json  (email, teléfono, enlaces…)
   Este fichero solo los carga; el resto de la web se actualiza solo.
   ============================================================ */

import esData from '../data/site/es.json';
import enData from '../data/site/en.json';
import profileData from '../data/site/profile.json';

export const PROFILE = profileData;

export const content = {
  es: esData,
  en: enData,
};

export function getContent(lang) {
  return content[lang] || content.es;
}
