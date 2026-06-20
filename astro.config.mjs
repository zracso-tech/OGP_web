import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// El panel de edición (Keystatic) solo se activa en local con `npm run dev`.
// En el build de producción (`npm run build`) NO se incluye: la web pública
// sigue siendo 100% estática y no expone ningún /keystatic.
const enableKeystatic =
  process.argv.includes('dev') || process.env.npm_lifecycle_event === 'dev';

export default defineConfig({
  site: 'https://oscargonzalez.pro',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
    ...(enableKeystatic ? [react(), keystatic()] : []),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
