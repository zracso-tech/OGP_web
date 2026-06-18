import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================================
   Colección del blog (Publicaciones)
   Cada artículo es un archivo .md dentro de src/content/blog/
     · ES → src/content/blog/es/<slug>.md
     · EN → src/content/blog/en/<slug>.md
   El <slug> (nombre del archivo) es la URL: /blog/<slug>/  ·  /en/blog/<slug>/
   ============================================================ */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),            // 'AAAA-MM-DD'
    tag: z.string(),                  // etiqueta/categoría
    excerpt: z.string(),              // resumen que se ve en la tarjeta
    lang: z.enum(['es', 'en']),       // idioma del artículo
    image: z.string().optional(),     // ruta de imagen (opcional): /images/...
    draft: z.boolean().default(false) // true = no se publica todavía
  }),
});

export const collections = { blog };
