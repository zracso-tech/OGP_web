---
title: "Mi primera app, o cómo construir una casa sin saber poner un ladrillo"
date: 2026-06-18
tag: "Claude Code"
excerpt: "Cómo monté una app para organizar mis partituras sin saber programar: hablando con Claude en mi idioma y dejando que la IA pusiera los ladrillos."
lang: es
image: /images/blog-mi-primera-app.png
draft: false
---

Todo empezó por la música, como tantas veces. Yo toco por afición, lo justo para disfrutar y lo suficiente para no presumir delante de nadie. El problema no era tocar: era el desorden. Partituras por todas partes, una libreta donde apuntaba qué piezas estaba practicando, otra donde anotaba lo que me salía y lo que no, y un cajón lleno de papeles que ya ni me molestaba en abrir. Tenía la música repartida por media casa y la cabeza igual.

Necesitaba algo mejor. Necesitaba una app.

El problema, claro, es que yo lo de programar lo tengo ahora un poco alejado ya. Así que durante años "hacerme una app" había sido una de esas frases que uno dice en las cenas, junto a "este verano me pongo en forma" o "un día de estos ordeno el garaje". Frases para no cumplir.

La diferencia, esta vez, es que tenía un albañil que trabaja gratis y no se queja.

## Primero, el plano: habla con Claude antes de tocar nada

Lo primero que aprendí es que no se empieza la casa por el tejado. Ni por los cimientos, en realidad. Se empieza por el plano.

Antes de abrir nada técnico, me senté a hablar con Claude en el chat, como quien habla con un arquitecto en un café. Le conté lo que quería: una aplicación sencilla para organizar mis partituras y llevar la cuenta de lo que practicaba. Le dije que no soy programador, que iba a usar Claude Code para construirla y que necesitaba un encargo bien escrito —el prompt— para arrancar con buen pie.

No le pedí que me hiciera la app. Le pedí que me ayudara a explicar lo que quería sin meter la pata.

Y ahí pasó algo curioso. Claude me hizo preguntas. Que para qué dispositivos, que qué datos quería guardar, que si esto iría en el móvil o en el ordenador. A base de responder a un desconocido educado, descubrí que yo mismo no tenía ni idea de lo que quería hasta que me obligaron a decirlo en voz alta.

Salí de esa conversación con un encargo de un folio. Ordenado, claro, con todo lo que un albañil necesita saber antes de pisar la obra.

El plano estaba listo. Faltaba la obra.

## La obra: abre el proyecto y suéltale el plano a Claude Code

Aquí entra Claude Code, que es la herramienta que de verdad levanta las paredes. Abrí un proyecto nuevo, una carpeta vacía, lo más parecido a un solar que vas a ver en tu vida, y le pegué el encargo que había preparado en el chat.

A partir de ahí, ya no le hablas como a un arquitecto. Le hablas como al jefe de obra. Y aquí va el consejo más importante que te puedo dar, el que me habría ahorrado un par de sustos: trabaja ordenado.

Le fui contando las cosas por bloques, despacio. Primero la idea general. Luego qué datos quería guardar: la pieza, el compositor, la dificultad, los días que la había practicado, mis notas de cada sesión. Después los procesos: cómo añadir una partitura nueva, cómo registrar un ensayo, cómo marcar una pieza como dominada. Más tarde los flujos, que es la palabra fina para "por dónde se mueve uno dentro de la app". Y al final, lo de menos importancia y lo que más nos gusta a todos, la pinta. El color, los botones, que se viera decente en el móvil porque yo iba a usarla con el instrumento delante, no sentado en una mesa.

No le solté todo de golpe. Eso es lo que hacía al principio, y es como darle a un albañil las instrucciones de la casa entera gritándolas desde la calle. Se pierde, te pierdes, y acabáis los dos levantando una pared donde iba la puerta.

Una cosa cada vez. Como cuando aprendes una pieza: compás a compás, sin querer tocarla entera el primer día.

## El almacén: la base de datos en Supabase

Llegó el momento de guardar las cosas en algún sitio. Porque una app que no recuerda nada es como yo a las ocho de la mañana: muy dispuesta, pero sin información útil.

Para eso está Supabase, que es donde vive la base de datos. El almacén de la casa, vamos. El cuarto donde se guarda todo lo que escribes para que siga ahí cuando cierras la puerta y te vas. Mis partituras, mis sesiones, mis notas: todo a buen recaudo.

Pero le dije a Claude Code que me llevara de la mano, paso a paso, sin dar nada por sabido. Y lo hizo. Que dónde apretar, que qué tabla crear, que qué nombre ponerle a cada columna. Yo iba ejecutando como quien sigue una receta de la abuela: sin entender del todo la química, pero confiando en que el bizcocho subiría.

El bizcocho subió. La app, por fin, recordaba todo lo que yo no era capaz de recordar.

## La caja fuerte y la puerta a la calle: GitHub y Vercel

Quedaban dos cosas, y las dos suenan más complicadas de lo que son.

La primera, poner el código a salvo. Para eso subí todo a GitHub, que es la caja fuerte donde guardas la obra terminada: una copia segura, ordenada, a la que siempre puedes volver si un día se te ocurre tirar una pared y te arrepientes. Cinco minutos. Claude Code me dictó los pasos.

La segunda, abrir la puerta. Porque una casa preciosa con la persiana echada no le sirve a nadie. Conecté el proyecto a Vercel y, casi sin darme cuenta, mi app dejó de vivir solo en mi ordenador y pasó a tener una dirección propia en internet. Producción, lo llaman los que saben. Yo lo llamo el día que pude abrirla desde el móvil, con el instrumento en las manos, y consultar de un vistazo qué tocaba ensayar.

La inauguré yo solo. Sin cinta roja, sin discursos. Pero la inauguré.

## Lo que de verdad construí

No te voy a engañar diciendo que ahora he actualizado mi skill de programador. No lo soy, ni tengo intención; además ya no me hace falta, tengo a Claude. Yo sigo sin saber poner un ladrillo.

La IA bien aplicada te libera de la tarea y te aumenta el foco en el objetivo y el resultado.

Pero monté una casa. Pequeña, con sus goteras, hecha a mi medida y para resolver algo que solo era mío: el desorden de un aficionado a la música que quería disfrutar tocando y no perder media tarde buscando la partitura. La hice en una tarde y pico, hablando con una máquina en mi idioma, sin haber tocado una línea de código en mi vida.

Lo difícil no era el código, era tener claro el objetivo. Y esa, mira por dónde, sí me la sabía.
