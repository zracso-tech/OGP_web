# Web personal — Óscar González Pérez

Web personal/portfolio C-Level (Astro + GSAP + Lenis). Bilingüe ES/EN, una sola página navegable, scroll dinámico.

## Arrancar en local

```bash
npm install      # solo la primera vez
npm run dev      # http://localhost:4321  (ES)  ·  /en/ (EN)
npm run build    # genera /dist para producción
```

## Cómo editar el contenido

Casi todo el texto vive en un único archivo: **`src/lib/content.js`** (bloques `es` y `en`).
Cambias el texto ahí y la web se actualiza sola.

## Tareas pendientes (para ti)

1. **Fotos** — copia tus imágenes en `public/images/` con estos nombres exactos:
   - `oscar-pro.jpg`        → foto profesional (hero)
   - `oscar-personal.jpg`   → foto personal 1 (playa)
   - `oscar-personal-2.jpg` → foto personal 2 (se revela al pasar el cursor)
   Recomendado: formato vertical, ~1000×1300 px, optimizadas (<300 KB).

2. **Calendario (Cal.com)** — crea tu cuenta gratis en https://cal.com, conecta tu
   calendario de Outlook y pega tu enlace de reserva en `src/lib/content.js`
   → `PROFILE.cal`. (Después embebemos el calendario dentro de la sección.)

3. **CV en inglés** — añade `public/cv/cv-oscar-gonzalez-en.pdf`.
   (El CV en español ya está en `public/cv/cv-oscar-gonzalez-es.pdf`.)

## Añadir un artículo al blog

Por ahora los artículos están en `src/lib/content.js` → `publications.posts`.
(Próxima mejora: artículos en archivos Markdown independientes con su propia página.)

## Estructura

```
src/
  lib/content.js        → todo el contenido bilingüe (editar aquí)
  layouts/Base.astro    → cabecera, menú, botón flotante, footer
  components/Page.astro → todas las secciones
  scripts/main.js       → animaciones (scroll, contadores, magnético, roadmap)
  styles/               → global.css (tokens) + components.css (secciones)
public/
  images/  cv/  favicon.svg
```
