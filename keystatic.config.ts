import { config, fields, singleton } from '@keystatic/core';

/* Icono Tabler (p. ej. ti-rocket). Cambia rara vez; texto simple. */
const iconField = (label: string) =>
  fields.text({
    label,
    description: 'Clave de icono Tabler, p. ej. ti-rocket (déjalo como está si no lo cambias).',
  });

/* Esquema compartido para el contenido ES y EN (misma estructura). */
const contentSchema = {
  nav: fields.array(
    fields.object({
      id: fields.text({ label: 'ID de sección (no cambiar)' }),
      label: fields.text({ label: 'Texto del menú' }),
    }),
    { label: 'Menú de navegación', itemLabel: (p) => p.fields.label.value },
  ),

  ui: fields.object(
    {
      langLabel: fields.text({ label: 'Etiqueta cambio de idioma (EN/ES)' }),
      bookMeeting: fields.text({ label: 'Botón "Agenda una reunión"' }),
      downloadCv: fields.text({ label: 'Botón "Descargar CV"' }),
      scroll: fields.text({ label: 'Texto "Desliza"' }),
      hoverHint: fields.text({ label: 'Pista hover' }),
    },
    { label: 'Textos de interfaz' },
  ),

  hero: fields.object(
    {
      line1: fields.text({ label: 'Título · línea 1' }),
      line2: fields.text({ label: 'Título · línea 2' }),
      line3a: fields.text({ label: 'Título · línea 3 (primera parte)' }),
      line3b: fields.text({ label: 'Título · línea 3 (parte destacada)' }),
      role: fields.text({ label: 'Rol / subtítulo', multiline: true }),
      tags: fields.array(fields.text({ label: 'Etiqueta' }), {
        label: 'Etiquetas (pills)',
        itemLabel: (p) => p.value,
      }),
      metrics: fields.array(
        fields.object({
          value: fields.integer({ label: 'Número', defaultValue: 0 }),
          suffix: fields.text({ label: 'Sufijo (Años, Países…)' }),
          label: fields.text({ label: 'Descripción' }),
        }),
        {
          label: 'Métricas',
          itemLabel: (p) => `${p.fields.value.value} ${p.fields.suffix.value}`,
        },
      ),
    },
    { label: 'Hero (portada)' },
  ),

  about: fields.object(
    {
      title: fields.text({ label: 'Título', multiline: true }),
      paragraphs: fields.array(fields.text({ label: 'Párrafo', multiline: true }), {
        label: 'Párrafos',
        itemLabel: (p) => p.value.slice(0, 40),
      }),
    },
    { label: 'Presentación' },
  ),

  personal: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      hint: fields.text({ label: 'Pista' }),
      items: fields.array(
        fields.object({
          icon: iconField('Icono'),
          name: fields.text({ label: 'Nombre' }),
          value: fields.text({ label: 'Descripción' }),
        }),
        { label: 'Aficiones', itemLabel: (p) => p.fields.name.value },
      ),
    },
    { label: 'Más allá del despacho' },
  ),

  competencies: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      items: fields.array(
        fields.object({
          icon: iconField('Icono'),
          title: fields.text({ label: 'Título' }),
          desc: fields.text({ label: 'Descripción', multiline: true }),
        }),
        { label: 'Competencias', itemLabel: (p) => p.fields.title.value },
      ),
    },
    { label: 'Competencias clave' },
  ),

  experience: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      actionLabel: fields.text({ label: 'Etiqueta "Qué hice"' }),
      resultsLabel: fields.text({ label: 'Etiqueta "Logros"' }),
      items: fields.array(
        fields.object({
          period: fields.text({ label: 'Periodo (2019 — 2025)' }),
          company: fields.text({ label: 'Empresa' }),
          role: fields.text({ label: 'Puesto' }),
          report: fields.text({ label: 'Reporte' }),
          action: fields.text({ label: 'Qué hice', multiline: true }),
          facts: fields.array(
            fields.object({
              icon: iconField('Icono'),
              text: fields.text({ label: 'Dato' }),
            }),
            { label: 'Datos clave', itemLabel: (p) => p.fields.text.value },
          ),
          results: fields.array(fields.text({ label: 'Logro', multiline: true }), {
            label: 'Logros',
            itemLabel: (p) => p.value.slice(0, 40),
          }),
        }),
        {
          label: 'Trayectoria',
          itemLabel: (p) => `${p.fields.period.value} · ${p.fields.company.value}`,
        },
      ),
    },
    { label: 'Experiencia' },
  ),

  education: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      studyTitle: fields.text({ label: 'Subtítulo "Formación"' }),
      study: fields.array(
        fields.object({
          name: fields.text({ label: 'Nombre' }),
          org: fields.text({ label: 'Centro / organización' }),
          note: fields.text({ label: 'Nota (opcional)' }),
        }),
        { label: 'Formación', itemLabel: (p) => p.fields.name.value },
      ),
      certsTitle: fields.text({ label: 'Subtítulo "Certificaciones"' }),
      certs: fields.array(fields.text({ label: 'Certificación' }), {
        label: 'Certificaciones',
        itemLabel: (p) => p.value.slice(0, 50),
      }),
      toolsTitle: fields.text({ label: 'Subtítulo "Herramientas"' }),
      tools: fields.array(
        fields.object({
          group: fields.text({ label: 'Grupo' }),
          items: fields.array(fields.text({ label: 'Herramienta' }), {
            label: 'Herramientas',
            itemLabel: (p) => p.value,
          }),
        }),
        { label: 'Herramientas & tecnología', itemLabel: (p) => p.fields.group.value },
      ),
      langTitle: fields.text({ label: 'Subtítulo "Idiomas"' }),
      languages: fields.array(
        fields.object({
          name: fields.text({ label: 'Idioma' }),
          level: fields.text({ label: 'Nivel' }),
          pct: fields.integer({ label: 'Porcentaje (0-100)', defaultValue: 0 }),
        }),
        { label: 'Idiomas', itemLabel: (p) => p.fields.name.value },
      ),
    },
    { label: 'Formación y certificaciones' },
  ),

  publications: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      readMore: fields.text({ label: 'Texto "Leer artículo"' }),
      soon: fields.text({ label: 'Texto "Próximamente"' }),
    },
    { label: 'Publicaciones' },
  ),

  contact: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      cta: fields.text({ label: 'Botón' }),
    },
    { label: 'Agenda (calendario)' },
  ),

  talk: fields.object(
    {
      title: fields.text({ label: 'Título' }),
      lead: fields.text({ label: 'Introducción', multiline: true }),
      emailLabel: fields.text({ label: 'Etiqueta Email' }),
      phoneLabel: fields.text({ label: 'Etiqueta Teléfono' }),
      linkedinLabel: fields.text({ label: 'Etiqueta LinkedIn' }),
      locationLabel: fields.text({ label: 'Etiqueta Ubicación' }),
    },
    { label: 'Contacto' },
  ),

  footer: fields.object(
    {
      rights: fields.text({ label: 'Derechos' }),
      made: fields.text({ label: 'Hecho con…' }),
    },
    { label: 'Pie de página' },
  ),
};

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Web Óscar González' },
    navigation: {
      Datos: ['profile'],
      Español: ['contentEs'],
      English: ['contentEn'],
    },
  },
  singletons: {
    profile: singleton({
      label: 'Datos de contacto',
      path: 'src/data/site/profile',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nombre' }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Teléfono (visible)' }),
        phoneHref: fields.text({ label: 'Teléfono (enlace, sin espacios)' }),
        linkedin: fields.url({ label: 'LinkedIn (URL)' }),
        location: fields.text({ label: 'Ubicación' }),
        cal: fields.url({ label: 'Cal.com (URL pública)' }),
        calLink: fields.text({ label: 'Cal.com (ruta para el embed)' }),
        cvEs: fields.text({ label: 'Ruta CV español' }),
        cvEn: fields.text({ label: 'Ruta CV inglés' }),
        formKey: fields.text({ label: 'Clave Web3Forms' }),
      },
    }),
    contentEs: singleton({
      label: 'Contenido (Español)',
      path: 'src/data/site/es',
      format: { data: 'json' },
      schema: contentSchema,
    }),
    contentEn: singleton({
      label: 'Contenido (English)',
      path: 'src/data/site/en',
      format: { data: 'json' },
      schema: contentSchema,
    }),
  },
});
