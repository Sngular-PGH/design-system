# Presentaciones Sngular

Lienzo 16:9 de 1920×1080. Fuentes: plantillas "Guías y Modelos de Slides Editables 2025" y "[2026 Corporate Template] Unconventional Executive Deck".

## Reglas de maquetación

- **Respeta el área segura:** `slide-margin-x` (96px) y `slide-margin-y` (144px). Ningún texto ni elemento sale de ella, salvo las imágenes a sangre.
- **Título pegado al margen superior**, en 1 o 2 líneas. Si no cabe, estira la caja a la derecha antes que añadir una tercera línea.
- **Isotipo `S|` arriba a la derecha** y **logotipo + "Copyright © Sngular. All rights reserved"** abajo a la izquierda, en `auxiliary`.
- **Alinea todo:** al terminar, quita las guías y comprueba que las cajas estén alineadas arriba entre columnas y centradas en altura respecto a la foto o la S.
- **Una idea por slide.** Un solo título especial y como mucho uno o dos resaltados por composición.
- **Color:** por defecto solo la paleta primaria. Los secundarios solo si hace falta distinguir partes de una slide.
- **Texto sobre foto:** `white` si la imagen es oscura, `navy` si es clara. Resaltar con fondo `blue`.
- Ajusta siempre la caja al final del texto; no dejes cajas vacías ni viudas.

## Catálogo de layouts

| # | Layout | Fondo | Composición |
|---|---|---|---|
| 1 | **Portada** | `navy` | Título de la presentación en `display-2` white, fecha en `paragraph`, S gigante y cursor. |
| 2 | **Separador de sección** | `navy`, `navy-light` o `blue` | Título de sección grande con la S; tres variantes de fondo. |
| 3 | **Texto a 1 columna** | `white` | Título + subtítulo `heading-2` blue + párrafo con viñetas (hasta 4 niveles). |
| 4 | **Texto + imagen** | `white` | Título, subtítulo, párrafo con viñetas y foto rectangular con cursor al lado. |
| 5 | **Foto a media página** | `white` / `navy-light` | Foto a sangre a un lado; título y párrafo centrados en altura con la foto. |
| 6 | **Título con S** | `white` | Título grande centrado en altura respecto a la `S|`, párrafo al lado. |
| 7 | **Foto a sangre con texto** | foto | Título largo sobre un rectángulo oscuro o degradado de legibilidad; no mover la caja. |
| 8 | **Cita** | foto coloreada | Cita en `display-2-regular` centrada con la S; la imagen se colorea en la paleta. |
| 9 | **Frase de impacto** | `navy` / `blue` | Una frase corta en `display-1` o `display-2`, centrada. |
| 10 | **Título especial** | `white` / `navy` | `SpecialTitle` + párrafo. |
| 11 | **Bloques (3 o 4)** | `white` | Título de bloque `heading-3` + párrafo por bloque, alineados arriba; imagen con cursor. |
| 12 | **Pasos numerados 01–04** | `white` / `navy` | Números grandes `display-2` + título de párrafo + texto. |
| 13 | **Esquema, tabla o mapa** | `white` | Título + diagrama, tabla o mapa de iconos; párrafo lateral opcional. |
| 14 | **Tabla** | `white` | Título de tabla, cabecera `navy` con texto white, filas alternas `navy-light`. |
| 15 | **Clientes por sector** | `white` | "Más de 1200 clientes": rejilla de sectores con icono. |
| 16 | **Dato grande / meet** | `navy-light` | Frase importante para que se lea en una videollamada + bloques de texto. |
| 17 | **Caso de éxito** | foto | Foto del proyecto + 2 párrafos (reto y solución). |
| 18 | **Equipo** | `white` | Fotos rectangulares + Nombre (`heading-3`) + Rol (`auxiliary`). |
| 19 | **Partners** | `white` | "Our partners are your partners" + logos de partners en gris. |
| 20 | **Cierre** | `navy` / `blue` | "Gracias" / "Thank you" + contacto. |

## Uso de los recursos en slides

- **Cursor con texto:** barra `blue` de `cursor-text` a la izquierda del párrafo, alineada con su primera línea.
- **Cursor con imagen:** barra `blue` de `cursor-image` pegada al borde de la foto.
- **S| en título:** la S va delante de un texto white sobre fondo blue. Sobre navy, la S| va en white.
- **Resaltado:** semibold o fondo `blue` con texto white, sin abusar.

## Gráficos

Los gráficos usan primero `navy`, `blue` y `navy-light`; si hacen falta más series, la paleta `chart-*`. Etiqueta siempre los valores: el color no es la única señal.

## Cómo construir un deck (paso a paso)

1. **Entiende el objetivo y el público.** Propuesta a cliente, presentación ejecutiva, caso de éxito, interno o evento. Si no se dice, pregunta solo el objetivo y la audiencia, en una frase.
2. **Escribe primero la historia.** Un titular por slide, que se lea solo, y después el contenido. Si la estructura no está clara, propón el esquema antes de diseñar.
3. **Asigna un layout del catálogo a cada slide.** No repitas el mismo layout más de tres veces seguidas.
4. **Ritmo de color:** portada en navy → contenido en white → separador de sección (navy, navy-light o blue) → contenido → frase de impacto → cierre en navy o blue.
5. **Aplica la checklist de SKILL.md** a cada slide.

## Estructuras de deck recomendadas

**Presentación ejecutiva** (patrón "Unconventional Executive Deck" 2026):

1. Portada: "Unconventional Executive Deck" o el título del encuentro.
2. "We are Sngular, your next generation technology partner. This presentation is about you."
3. Por cada reto del cliente, tres slides:
   - Pregunta provocadora a pantalla completa (layout 9, frase de impacto): "Would you build a new business focused on wellbeing?"
   - Testimonio (layout 8, cita): la frase del cliente, con nombre, cargo y empresa.
   - Caso (layout 17): título del caso con subtítulo, y los bloques **Challenge / Solution / Results**, con los resultados como cifras.
4. "All your concerns boil down to one of these four questions…": los cuatro bloques "right team / right tools / right processes / right outcomes" (layout 11).
5. Pregunta de transición: "We'd love to hear your questions. Because you are Unconventional and we always Deliver."
6. Separador "We are Sngular" y, a continuación, About Sngular, cifras (Overview), "One Sngular, Multiple Studios", servicios, industrias, presencia global, tech stack, partners, certificaciones y ESG.
7. Cierre: "Now you know us. Would you consider exploring a next step?" + "Thank you for your attention! Let's keep this conversation open! business@sngular.com".

**Propuesta a cliente:** portada → contexto del cliente (su reto, en sus palabras) → objetivos → enfoque y solución → fases y timeline (layout 12) → equipo (layout 18) → casos relacionados (layout 17) → modelo de colaboración o inversión → por qué Sngular (Stat + pilares) → próximos pasos → cierre.

**Caso de éxito (1–3 slides):** pregunta o titular → testimonio → Challenge / Solution / Results con 2–3 cifras.

## Recetas de slide

- **Portada:** fondo `navy`. Título en `display-2` white (máximo 2 líneas), fecha o evento en `paragraph` white, logotipo negativo abajo a la izquierda y S gigante con cursor a la derecha.
- **Separador:** fondo `navy`, `navy-light` o `blue`. Título en `display-2` junto a la S|. Con fondo navy o blue, texto white; con navy-light, texto navy.
- **Contenido:** fondo `white`. Título en `heading-1`, subtítulo opcional en `heading-2` blue, texto en `paragraph` y como máximo 6 viñetas.
- **Frase de impacto o pregunta:** una sola frase en `display-1`/`display-2`, centrada o alineada al margen, con una palabra clave en `Highlight`.
- **Cita:** comillas tipográficas, `display-2-regular`, y el autor en `heading-3` + `auxiliary` (cargo, empresa).
- **Cifras:** 3–4 `Stat` en fila sobre `navy-light` o `navy`. Siempre con etiqueta y fecha de la cifra ("Dec 2024").
- **Challenge / Solution / Results:** tres bloques con `overline` + párrafo; los Results como lista corta de cifras en `heading-3`.
- **Cierre:** fondo `navy` o `blue`, "Thank you" / "Gracias" en `display-1`, y el contacto business@sngular.com.

## Densidad y texto

- Un titular de una línea (dos como máximo) que se entienda sin leer el resto.
- 40–60 palabras por slide de contenido. Si hay más, divide la slide o pasa el texto a las notas del orador.
- Pon el detalle en las notas del orador, no en la slide.
- Nunca pongas texto encima de una caja de color de acento.
