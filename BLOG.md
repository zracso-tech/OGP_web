# Cómo añadir / editar publicaciones (blog)

Cada artículo es **un archivo `.md`** dentro de `src/content/blog/`:

- Español → `src/content/blog/es/`
- Inglés  → `src/content/blog/en/`

El **nombre del archivo es la URL**. Por ejemplo `mi-articulo.md` se publica en:
`/blog/mi-articulo/` (ES) y `/en/blog/mi-articulo/` (EN).

La web genera sola la tarjeta en la sección **Publicaciones** y la **página del artículo**. Se ordenan por fecha (la más reciente primero).

---

## Añadir un artículo nuevo

1. Copia un `.md` existente (p. ej. `es/ia-palanca-negocio.md`) y renómbralo, por ejemplo `es/liderazgo-y-ia.md`.
2. Cambia los datos de la cabecera (entre las líneas `---`) y escribe el texto debajo.
3. Para la versión en inglés, repite en `en/` con el **mismo nombre de archivo**.
4. Guarda. En local se ve al instante; en producción, con el siguiente despliegue.

## Cabecera (lo que va entre `---`)

```markdown
---
title: "Título del artículo"
date: 2026-06-18           # AAAA-MM-DD
tag: "Inteligencia Artificial"
excerpt: "Frase corta que aparece en la tarjeta."
lang: es                   # es  o  en
image: /images/foto.jpg    # opcional; si no la pones, sale el degradado azul
draft: false               # true = aún no se publica
---
```

## El texto (debajo de la cabecera)

Se escribe en **Markdown**:

```markdown
## Subtítulo

Un párrafo normal. Puedes poner **negrita**, *cursiva* y [un enlace](https://...).

- viñeta uno
- viñeta dos

> Una cita destacada.
```

## Truco

- Para **ocultar** un artículo sin borrarlo: pon `draft: true`.
- Para que **no salga aún** una versión de idioma: simplemente no crees ese `.md`.
