/* ============================================================
   Contenido bilingüe (ES / EN) — Óscar González Pérez
   Editar aquí los textos. El resto de la web se actualiza solo.
   ============================================================ */

export const PROFILE = {
  name: 'Óscar González Pérez',
  email: 'oscar.gonzalez.perez@outlook.es',
  phone: '+34 636 488 067',
  phoneHref: '+34636488067',
  linkedin: 'https://www.linkedin.com/in/oscar-gonzalez-perez-471b865/',
  location: 'Madrid, España',
  // Cal.com — enlace público y ruta para el embed
  cal: 'https://cal.com/oscar-gonzalez-s6gtmv/30min',
  calLink: 'oscar-gonzalez-s6gtmv/30min',
  cvEs: '/cv/cv-oscar-gonzalez-es.pdf',
  cvEn: '/cv/cv-oscar-gonzalez-en.pdf',
  // Web3Forms (avisos del formulario "Recibe mi CV"). Clave de https://web3forms.com
  formKey: 'd98c8208-d0e8-4b83-978e-eaa537517446',
};

const NAV = {
  es: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'presentacion', label: 'Presentación' },
    { id: 'competencias', label: 'Competencias' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'formacion', label: 'Formación' },
    { id: 'publicaciones', label: 'Publicaciones' },
    { id: 'contacto', label: 'Agenda' },
    { id: 'hablemos', label: 'Contacto' },
  ],
  en: [
    { id: 'inicio', label: 'Home' },
    { id: 'presentacion', label: 'About' },
    { id: 'competencias', label: 'Expertise' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'formacion', label: 'Education' },
    { id: 'publicaciones', label: 'Insights' },
    { id: 'contacto', label: 'Book' },
    { id: 'hablemos', label: 'Contact' },
  ],
};

export const content = {
  es: {
    nav: NAV.es,
    ui: {
      langLabel: 'EN',
      bookMeeting: 'Agenda una reunión',
      downloadCv: 'Descargar CV',
      scroll: 'Desliza',
      hoverHint: 'Mueve el cursor',
    },
    hero: {
      line1: 'Liderando proyectos,',
      line2: 'Alineando estrategias,',
      line3a: 'Multiplicando',
      line3b: ' resultados.',
      role: 'C-Level · Chief AI & Digital Officer · Transformación Digital · Estrategia de Producto & Negocio',
      tags: ['C-Level' , 'IT Management', 'Business Development', 'Digital Transformation', 'AI Business Oriented', 'Product'],
      metrics: [
        { value: 10, suffix: 'Años', label: 'Consulting IT' },
        { value: 20, suffix: 'Años', label: 'Liderando Transformacion' },
        { value: 11, suffix: 'Países', label: 'Experiencia Internacional' },
               ],
    },
    about: {
      title: 'Más de 20 años convirtiendo la tecnología en resultados de negocio.',
      paragraphs: [
        'Directivo con más de 25 años de experiencia liderando transformación digital, desarrollo de producto y crecimiento de negocio en compañías multinacionales y entornos complejos. ',
        'Experiencia en desarrollo de negocio y diseño e implementación de soluciones corporativas globales  con despliegues internacionales. ',
        'Generacion de unidades de negocio, producto, estrategia de transformacion, IA & DATA oriented strategy, gestion de stakeholders de C-suite, equipos multidisciplinares y P&L. ',
      ],
    },
    personal: {
      title: 'Más allá del despacho',
      lead: 'En cada uno de nuestros ambitos somos partes de un todo mucho mas enriquecedor. Quién soy fuera de la oficina define cómo lidero dentro de ella.',
      hint: 'Mueve el cursor sobre la imagen',
      items: [
        { icon: 'ti-karate', name: 'Taekwondo', value: 'Autodisciplina y mejora continua' },
        { icon: 'ti-scuba-mask', name: 'Buceo', value: 'Confianza en el equipo y compañerismo' },
        { icon: 'ti-barbell', name: 'CrossFit', value: 'Resiliencia y rendimiento bajo presión' },
        { icon: 'ti-guitar-pick', name: 'Guitarra', value: 'Creatividad y armonía de equipos' },
      ],
    },
    competencies: {
      title: 'Competencias clave',
      lead: 'Donde aporto valor diferencial a una organización.',
      items: [
        { icon: 'ti-rocket', title: 'Transformación digital', desc: 'Diseño y ejecución de estrategias que integran negocio, tecnología y datos a escala global.' },
        { icon: 'ti-cpu', title: 'IA aplicada al negocio', desc: 'LLM y automatizaciones orientadas a eficiencia operativa, decisión en tiempo real con impacto medible.' },
        { icon: 'ti-target-arrow', title: 'Estrategia de producto ', desc: 'Definición de visión, roadmap y evolución de producto orientada a cliente y a nuevas fuentes de ingresos.' },
        { icon: 'ti-world', title: 'Business Development', desc: 'Crecimiento y expansión internacional (LATAM, EMEA, USA), apertura de mercados y nuevas líneas de negocio.' },
        { icon: 'ti-users-group', title: 'Liderazgo de equipos', desc: 'Dirección de equipos multidisciplinares y gestión del cambio en organizaciones complejas.' },
        { icon: 'ti-chart-arrows-vertical', title: 'Visión data-driven', desc: 'Modelos predictivos y KPIs como motor de decisión, eficiencia y ventaja competitiva.' },
      ],
    },
    experience: {
      title: 'Trayectoria',
      lead: 'Un recorrido de impacto: del consulting a la dirección C-Level. Desliza para recorrerlo.',
      actionLabel: 'Qué hice',
      resultsLabel: 'Logros',
      items: [
        {
          period: '2019 — 2025', company: 'Prosegur',
          role: 'Digital Transformation & Enterprise Platform Executive',
          report: 'Reporte: Director Global de Transformación',
          action: 'Lideré la transformación digital de la organización mediante una plataforma corporativa global que integra datos, procesos y capacidades en tiempo real. Dirigí iniciativas de IA, LLM, analítica y automatización con impacto directo en eficiencia y escalabilidad.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Despliegue global: 11 países, +3.000 usuarios activos, +16.000 centros integrados', '+70.000 operativos monitorizados con IA en Help Operation', 'Modelo predictivo de decisión en tiempo real gestionado vía KPIs', 'Solución diferenciadora con alto valor añadido vs. estándar del sector'],
        },
        {
          period: '2010 — 2019', company: 'Prosegur',
          role: 'Product, Business & International Growth Executive',
          report: 'Reporte: Dirección General',
          action: 'Desarrollé y escalé una unidad de negocio combinando estrategia de producto, desarrollo comercial y expansión internacional, transformando el modelo hacia un enfoque cliente, eficiencia y nuevas fuentes de ingresos mediante tecnología.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Crecimiento de ingresos: +10%', 'Expansión internacional: LATAM y EMEA', 'Creación de nuevas líneas de negocio y servicios tecnológicos', 'Reposicionamiento completo de la unidad con integración tecnológica'],
        },
        {
          period: '2008 — 2010', company: 'Prosegur',
          role: 'Business Development & International Expansion Leader',
          report: 'Reporte: Dirección General',
          action: 'Creé y lancé la División Aeroportuaria desde cero, liderando el modelo operativo, la estrategia comercial y la estructura inicial de la unidad de negocio, con enfoque en escalabilidad y cumplimiento normativo.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Generación de 32M€ en volumen de negocio (fase inicial)', 'Expansión internacional: Portugal', 'Posicionamiento de la división como referente sectorial', 'Globalización exitosa del modelo operativo y comercial'],
        },
        {
          period: '2006 — 2008', company: 'Prosegur',
          role: 'Business Development Transformation & CRM Strategy',
          report: 'Reporte: Director Comercial',
          action: 'Diseñé e implanté un nuevo modelo comercial basado en una visión 360º del cliente, transformando el área hacia un enfoque data-driven y customer-centric.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Implantación de Salesforce CRM a nivel nacional (España)', 'Modelo Customer 360 para grandes cuentas', 'Estrategias de cross-selling y up-selling basadas en datos', 'Adopción completa del CRM por la fuerza de ventas'],
        },
        {
          period: '2004 — 2006', company: 'Evendor Engineering',
          role: 'Head SAP Division',
          report: 'Reporte: Director General',
          action: 'Creé e integré una nueva división dentro del grupo corporativo, definiendo un modelo operativo escalable y alineando procesos y equipos para fortalecer la propuesta de valor al cliente.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Traslado de unidad manteniendo el 100% de la cartera de clientes', 'Retención y crecimiento del equipo de consultoría', 'Integración completa en la estructura corporativa'],
        },
        {
          period: '2001 — 2004', company: 'Software Injob',
          role: 'CEO & Founder',
          report: 'Fundador',
          action: 'Fundé y dirigí una consultora especializada en soluciones técnicas SAP para clientes corporativos, liderando la estrategia global, el desarrollo de negocio y las operaciones desde cero.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Escalado de 0 a 30 profesionales', 'Facturación: ~1M€', 'Proveedor SAP de referencia para clientes corporativos', 'Gestión del ciclo completo: ventas, delivery y operaciones'],
        },
        {
          period: '2000 — 2001', company: 'Arthur Andersen',
          role: 'Project Manager',
          report: 'Reporte: Gerencia SAP',
          action: 'Gestioné proyectos tecnológicos complejos de implementación ERP/SAP para clientes corporativos: Telefónica, Grupo BASF, Sogecable y MediaSet.',
          facts: [
            { icon: 'ti-target-arrow', text: 'pondremos esta frase que luego cambiaré' },
            { icon: 'ti-users-group', text: '25 recursos' },
            { icon: 'ti-world', text: 'Nacional' },
          ],
          results: ['Entrega exitosa de soluciones ERP/SAP cumpliendo objetivos', 'Gestión simultánea de múltiples proyectos enterprise', 'Consolidación de relaciones con cuentas estratégicas'],
        },
      ],
    },
    education: {
      title: 'Formación y certificaciones',
      lead: 'Aprendizaje continuo, con foco actual en Inteligencia Artificial aplicada.',
      studyTitle: 'Formación',
      study: [
        { name: '2025-2026: Rethinking Business With AI', org: 'ESADE', note: 'Estrategia empresarial en IA · Gobierno · ROI · LLM · Agentic AI (actualmente)' },
        { name: '2010  Dirección Comercial y Marketing', org: 'Máster IDE-CESEM' },
        { name: '2005: Dirección Empresarial', org: 'Máster Cámara de Comercio de Madrid' },
        { name: '1998: Business Information Technology', org: 'Diplomado ESI' },
      ],
      certsTitle: 'Certificaciones',
      certs: [
        '2026: Inteligencia Artificial en la Gestión de Proyectos (Alison, 2026)',
        '2022 Certified SAFe® 5 — AGILE Product Owner (2022)',
        '2000: SAP R/3 Development',

      ],
      toolsTitle: 'Herramientas & tecnología',
      tools: [
        { group: 'Gestión & Colaboración', items: ['Microsoft Office Suite', 'Dynamics 365', 'Microsoft Project', 'Salesforce CRM', 'SAP (R/3 & BO)', 'Power BI', 'Jira', 'Confluence', 'Asana'] },
        { group: 'IA & Automatización', items: ['ChatGPT', 'Gemini', 'Claude', 'CoWork', 'Claude Code', 'Copilot', 'Grok', 'Perplexity', 'NotebookLM', 'Loveable', 'Supabase', 'Github', 'Vercel', 'Make', 'N8N'] },
        { group: 'Marketing & CRM', items: ['Salesforce', 'Mailchimp', 'Canva'] },
        { group: 'Metodologías', items: ['Agile', 'SAFe', 'Scrum', 'OKR', 'KPI Management', 'Change Management'] },
      ],
      langTitle: 'Idiomas',
      languages: [
        { name: 'Español', level: 'Nativo', pct: 100 },
        { name: 'Inglés', level: 'Competencia profesional (B2)', pct: 75 },
      ],
    },
    publications: {
      title: 'Publicaciones',
      lead: 'Reflexiones sobre liderazgo IT, transformación digital e Inteligencia Artificial.',
      readMore: 'Leer artículo',
      soon: 'Próximamente más artículos.',
      // Los artículos ya NO se editan aquí: cada uno es un .md en src/content/blog/es/ (ver BLOG.md)
    },
    contact: {
      title: 'Agenda una reunión',
      lead: 'Reserva directamente un hueco en mi agenda. Recibirás confirmación por email y la cita se añadirá a tu calendario.',
      cta: 'Abrir calendario',
    },
    talk: {
      title: 'Contacto',
      lead: '¿Tienes un reto donde la tecnología pueda multiplicar resultados? Conectemos.',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      linkedinLabel: 'LinkedIn',
      locationLabel: 'Ubicación',
    },
    footer: { rights: 'Todos los derechos reservados.', made: 'Diseñado y desarrollado a medida.' },
  },

  en: {
    nav: NAV.en,
    ui: {
      langLabel: 'ES',
      bookMeeting: 'Book a meeting',
      downloadCv: 'Download CV',
      scroll: 'Scroll',
      hoverHint: 'Move your cursor',
    },
    hero: {
      line1: 'Leading projects,',
      line2: 'Aligning strategies,',
      line3a: 'Multiplying',
      line3b: ' results.',
      role: 'C-Level Leader · Product, Business Development & Digital Transformation',
      tags: ['C-Level · IT Management', 'CPO · Product', 'Business Development', 'Digital Transformation', 'AI Business Oriented'],
      metrics: [
        { value: 10, suffix: 'Years', label: 'IT Consulting' },
        { value: 20, suffix: 'Years', label: 'Leading Transformation' },
        { value: 11, suffix: 'Countries', label: 'International Experience' },
      ],
    },
    about: {
      title: 'Over 20 years turning technology into business results.',
      paragraphs: [
        'C-Level executive with more than 20 years of experience in management, business development, digital transformation and product (CPO) across consulting, technology and security, within both multinationals and SMEs.',
        'Specialised in designing business development strategies and leading projects and multidisciplinary teams. Goal-oriented, with strong analytical, negotiation and leadership skills.',
        'Today my focus is on applying Artificial Intelligence as a real lever for efficiency, scalability and decision-making, aligning business, technology and data.',
      ],
    },
    personal: {
      title: 'Beyond the office',
      lead: 'Who I am outside the office shapes how I lead within it.',
      hint: 'Move your cursor over the image',
      items: [
        { icon: 'ti-karate', name: 'Taekwondo', value: 'Self-discipline and continuous improvement' },
        { icon: 'ti-scuba-mask', name: 'Diving', value: 'Trust in the team and teamwork' },
        { icon: 'ti-barbell', name: 'CrossFit', value: 'Resilience and performance under pressure' },
        { icon: 'ti-guitar-pick', name: 'Guitar', value: 'Creativity and team harmony' },
      ],
    },
    competencies: {
      title: 'Core expertise',
      lead: 'Where I add differential value to an organisation.',
      items: [
        { icon: 'ti-rocket', title: 'Digital transformation', desc: 'Design and execution of platform strategies integrating business, technology and data at global scale.' },
        { icon: 'ti-cpu', title: 'AI for business', desc: 'AI and LLMs focused on operational efficiency, automation and real-time decision-making with measurable impact.' },
        { icon: 'ti-target-arrow', title: 'Product strategy (CPO)', desc: 'Vision, roadmap and product evolution oriented to the customer and new revenue streams.' },
        { icon: 'ti-world', title: 'Business development', desc: 'Growth and international expansion (LATAM, EMEA), new markets and new business lines.' },
        { icon: 'ti-users-group', title: 'Team leadership', desc: 'Leading multidisciplinary teams and change management in complex organisations.' },
        { icon: 'ti-chart-arrows-vertical', title: 'Data-driven vision', desc: 'Predictive models and KPIs as the engine of decision, efficiency and competitive advantage.' },
      ],
    },
    experience: {
      title: 'Career path',
      lead: 'A track record of impact: from consulting to C-Level leadership. Scroll to explore.',
      actionLabel: 'What I did',
      resultsLabel: 'Achievements',
      items: [
        {
          period: '2019 — 2025', company: 'Prosegur',
          role: 'Digital Transformation & Enterprise Platform Executive',
          report: 'Reporting to: Global Transformation Director',
          action: 'Led the digital transformation of the organisation through a global corporate platform integrating data, processes and capabilities in real time. Drove AI, LLM, analytics and automation initiatives with direct impact on efficiency and scalability.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Global rollout: 11 countries, +3,000 active users, +16,000 integrated sites', '+70,000 operations monitored with AI in Help Operation', 'Real-time predictive decision model managed via KPIs', 'Differentiating solution with high added value vs. industry standard'],
        },
        {
          period: '2010 — 2019', company: 'Prosegur',
          role: 'Product, Business & International Growth Executive',
          report: 'Reporting to: General Management',
          action: 'Developed and scaled a business unit combining product strategy, commercial development and international expansion, shifting the model towards customer focus, efficiency and new technology-driven revenue streams.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Revenue growth: +10%', 'International expansion: LATAM and EMEA', 'Creation of new business lines and technology services', 'Full repositioning of the unit with technology integration'],
        },
        {
          period: '2008 — 2010', company: 'Prosegur',
          role: 'Business Development & International Expansion Leader',
          report: 'Reporting to: General Management',
          action: 'Created and launched the Airport Division from scratch, leading the operating model, commercial strategy and initial structure of the business unit, focused on scalability and regulatory compliance.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Generated €32M in business volume (initial phase)', 'International expansion: Portugal', 'Positioned the division as an industry benchmark', 'Successful globalisation of the operating and commercial model'],
        },
        {
          period: '2006 — 2008', company: 'Prosegur',
          role: 'Business Development Transformation & CRM Strategy',
          report: 'Reporting to: Commercial Director',
          action: 'Designed and deployed a new commercial model based on a 360º customer view, transforming the area towards a data-driven, customer-centric approach.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Nationwide Salesforce CRM deployment (Spain)', 'Customer 360 model for key accounts', 'Data-driven cross-selling and up-selling strategies', 'Full CRM adoption by the sales force'],
        },
        {
          period: '2004 — 2006', company: 'Evendor Engineering',
          role: 'Head of SAP Division',
          report: 'Reporting to: General Manager',
          action: 'Created and integrated a new division within the corporate group, defining a scalable operating model and aligning processes and teams to strengthen the value proposition.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Unit transfer keeping 100% of the client portfolio', 'Retention and growth of the consulting team', 'Full integration into the corporate structure'],
        },
        {
          period: '2001 — 2004', company: 'Software Injob',
          role: 'CEO & Founder',
          report: 'Founder',
          action: 'Founded and led a consultancy specialised in SAP technical solutions for corporate clients, leading global strategy, business development and operations from scratch.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Scaled from 0 to 30 professionals', 'Revenue: ~€1M', 'Reference SAP provider for corporate clients', 'Managed the full cycle: sales, delivery and operations'],
        },
        {
          period: '2000 — 2001', company: 'Arthur Andersen',
          role: 'Project Manager',
          report: 'Reporting to: SAP Management',
          action: 'Managed complex ERP/SAP implementation projects for corporate clients: Telefónica, BASF Group, Sogecable and MediaSet.',
          facts: [
            { icon: 'ti-target-arrow', text: 'we will put this phrase, I will change it later' },
            { icon: 'ti-users-group', text: '25 resources' },
            { icon: 'ti-world', text: 'National' },
          ],
          results: ['Successful delivery of ERP/SAP solutions meeting project goals', 'Simultaneous management of multiple enterprise projects', 'Consolidation of strategic account relationships'],
        },
      ],
    },
    education: {
      title: 'Education & certifications',
      lead: 'Continuous learning, currently focused on applied Artificial Intelligence.',
      studyTitle: 'Education',
      study: [
        { name: 'Rethinking Business With AI', org: 'ESADE', note: 'Business strategy in AI · Governance · ROI · LLM · Agentic AI (ongoing)' },
        { name: 'Commercial Management & Marketing', org: 'Master IDE-CESEM' },
        { name: 'Business Management', org: 'Master, Madrid Chamber of Commerce' },
        { name: 'Business Information Technology', org: 'Diploma, ESI' },
      ],
      certsTitle: 'Certifications',
      certs: [
        'Artificial Intelligence in Project Management (Alison, 2026)',
        'Certified SAFe® 5 — Agile Product Owner (2022)',
        'Scrum Product Owner (Tecnofor Agile)',
        'SAP R/3 Development',
        'Project management with AI',
      ],
      toolsTitle: 'Tools & technology',
      tools: [
        { group: 'Management & Collaboration', items: ['Microsoft Office Suite', 'Dynamics 365', 'Microsoft Project', 'Salesforce CRM', 'SAP (R/3 & BO)', 'Power BI', 'Jira', 'Confluence', 'Asana'] },
        { group: 'AI & Automation', items: ['ChatGPT', 'Gemini', 'Claude', 'CoWork', 'Claude Code', 'Copilot', 'Grok', 'Perplexity', 'NotebookLM', 'Loveable', 'Supabase', 'Github', 'Vercel', 'Make', 'N8N'] },
        { group: 'Marketing & CRM', items: ['Salesforce', 'Mailchimp', 'Canva'] },
        { group: 'Methodologies', items: ['Agile', 'SAFe', 'Scrum', 'OKR', 'KPI Management', 'Change Management'] },
      ],
      langTitle: 'Languages',
      languages: [
        { name: 'Spanish', level: 'Native', pct: 100 },
        { name: 'English', level: 'Professional working proficiency (B2)', pct: 75 },
      ],
    },
    publications: {
      title: 'Insights',
      lead: 'Thoughts on IT leadership, digital transformation and Artificial Intelligence.',
      readMore: 'Read article',
      soon: 'More articles coming soon.',
      // Articles are NOT edited here anymore: each one is a .md in src/content/blog/en/ (see BLOG.md)
    },
    contact: {
      title: 'Book a meeting',
      lead: 'Pick a slot directly in my calendar. You will receive an email confirmation and the meeting will be added to your calendar.',
      cta: 'Open calendar',
    },
    talk: {
      title: "Let's talk",
      lead: 'Have a challenge where technology can multiply results? Let’s connect.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn',
      locationLabel: 'Location',
    },
    footer: { rights: 'All rights reserved.', made: 'Custom designed and developed.' },
  },
};

export function getContent(lang) {
  return content[lang] || content.es;
}
