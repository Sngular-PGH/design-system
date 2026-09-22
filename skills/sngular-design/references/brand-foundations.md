# Fundamentos de marca Sngular

Copia de la guía del Sngular Design System (Brand Book 2025). Los valores exactos están en `../assets/tokens.json` y `../assets/tokens.css`.

> Prioridad de uso: 1) presentaciones, 2) sitios web, 3) apps. Idiomas: español e inglés. Tema: solo claro (Light). Accesibilidad: WCAG 2.1 AA.

## Concepto: el cursor

Un cursor que titila es una invitación: *crea, escribe*. **El cursor es una idea que quiere ser grande**, y Sngular es la base tecnológica que la hace realidad. Por eso la **S** siempre aparece junto a un **cursor** (`S|`). El cursor es el elemento dinámico, transformador y de énfasis de toda la marca: inicia un subtítulo o un párrafo, acompaña imágenes, selecciona y resalta texto y construye los títulos especiales.

## Voz y tono

Sngular es un *next-generation technology partner*: no convencional, técnica y segura de sí misma. Se habla con claridad y ambición, sin grandilocuencia.

- **Sí:** frases cortas y afirmativas ("We don't just follow trends — we engineer the future"); datos concretos (+1300 personas, +500 clientes, 11 regiones); verbos de acción; un único mensaje destacado por composición.
- **No:** superlativos vacíos, tono publicitario de stock, exclamaciones, emojis, jerga sin explicar.
- **Bilingüe:** español e inglés. Los textos en español son ~20% más largos: deja aire en las cajas. No mezcles idiomas en una misma pieza, salvo nombres de servicio (Data & AI, Cloud Integration…).
- **Nombre:** se escribe siempre **Sngular** en texto corrido; `S|NGULAR` solo como logotipo. En un servicio o submarca se usa la firma escrita "by Sngular", nunca el logo con guion.

## Color

Dos paletas: **primaria (95% de uso)** y **secundaria (5%, acentos)**.

| Paleta | Token | HEX | CMYK (impresión) |
|---|---|---|---|
| Primaria | `navy` | #061B2B | 90/75/55/68 |
| Primaria | `navy-light` | #F2F3F4 | 4/2/2/0 |
| Primaria | `white` | #FFFFFF | 0/0/0/0 |
| Primaria | `blue` | #0070F6 | 85/47/1/0 |
| Secundaria | `purple` | #9747FF | — |
| Secundaria | `green` | #B3E500 | — |
| Secundaria | `red` | #FF0059 | — |

Reglas del brand book:

1. **La paleta primaria es la protagonista.** Fondos y tipografía van en `navy`, `navy-light`, `white` y `blue`.
2. **Títulos, siempre en color primario** (`ink` o `blue`), nunca en color de acento.
3. **Nunca uses colores de acento para párrafos.** `purple`, `green` y `red` son para iconos, líneas y pequeños elementos que captan la atención.
4. **Nunca uses una caja de color de acento con texto.** Una caja sólida con mucho texto sacrifica la legibilidad.
5. **Párrafos:** `navy` sobre fondo blanco; `white` sobre fondo oscuro.
6. **Paleta alternativa** (`chart-*`: Violet, Bolt, Sky, Mint, Lime, Sun, Coral, Magenta): solo para gráficos y roadmaps con muchas series. Nunca como color predominante.

Los tokens semánticos (`surface`, `surface-alt`, `surface-inverse`, `ink`, `ink-inverse`, `accent`, `on-accent`, `focus`, `danger`) apuntan a la paleta. Úsalos en web y apps en lugar de los nombres de color.

## Tipografía

**Outfit** es la tipografía principal, para todo. **Verdana** es la auxiliar: solo en documentos que va a editar un cliente o una persona externa, o en entornos que no tienen Outfit. Outfit es de licencia abierta (Google Fonts, OFL): se puede usar en web y apps sin restricción.

| Estilo | Peso | Tamaño / interlínea | Uso |
|---|---|---|---|
| `display-1` | SemiBold 600 | 92 / 98 | Titular aislado de máximo impacto |
| `display-2` | SemiBold 600 | 65 / 70 | Titular destacado |
| `display-2-regular` | Regular 400 | 65 / 70 | Frase o cita grande |
| `heading-1` | SemiBold 600 | 48 / 52 | Título de slide o página |
| `heading-1-light` | Light 300 | 48 / 52 | Título editorial |
| `heading-2` | Regular 400 | 32 / 38 | Subtítulo, principalmente en `blue` |
| `heading-3` | SemiBold 600 | 22 / 30 | Título de bloque |
| `paragraph-big` | Regular 400 | 24 / 36 | Solo junto a un display |
| `paragraph` | Regular 400 | 20 / 30 | Párrafo estándar |
| `overline` | SemiBold 600 | 18 / 24 | MAYÚSCULAS, introduce un título |
| `auxiliary` | Light 300 | 14 / 24 | Texto secundario, pies, copyright |

Los tamaños están definidos para un lienzo de **1920×1080** (slides y web de escritorio). En móvil se usan los estilos `ui-*`, que son derivados para UI.

- Para resaltar palabras en un párrafo usa **Outfit Bold (700)** o el componente **Highlight**. Nunca subrayado ni cursiva de énfasis.
- `paragraph` y `paragraph-big` no se combinan en la misma composición.
- Interletrado 0 en todos los estilos.
- Evita viudas: ninguna línea debe terminar con una palabra suelta.

## Logotipo

El logotipo es `S|NGULAR`: la S, el cursor azul y NGULAR. Siempre se usan los archivos originales del grupo **Logos**; nunca se redibuja.

- **Positivo** (`Logotype_Positive.svg`): navy + cursor blue, sobre fondos claros.
- **Negativo** (`Logotype_Negative.svg`): white + cursor blue, sobre navy o sobre fotografía oscura.
- **Sólidos** (`Logotype_Solid_Navy.svg`, `Logotype_Solid_White.svg`): para tamaños pequeños o fondos donde el azul no contrasta.
- **Área de seguridad:** si el logotipo mide `3x` de ancho y `1.5y` de alto, deja `x` libre a cada lado (un tercio de su ancho) e `y` arriba y abajo (dos tercios de su alto). Ningún elemento gráfico invade ese espacio.
- **Reducción mínima:** 24px de alto en la versión sólida (`logo-min-solid`) y 36px en las versiones a color (`logo-min-color`).
- **Isotipo** `S|`: la reducción simbólica de la marca, sin texto. Se usa como avatar de perfil, icono de app, favicon, en la esquina superior derecha de slides y como recurso gráfico.

## Recursos gráficos

Son el ADN visual de la marca. Úsalos con intención y con moderación.

1. **Cursor** (componente `Cursor`, `CursorText`). Una barra vertical `blue` que marca el inicio de algo: acompaña a un párrafo (grosor `cursor-text`) o a una imagen o panel (grosor `cursor-image`, a sangre por un lado).
2. **Texto seleccionado** (`Highlight`). Fondo `blue` con texto `white`, como si el cursor hubiera seleccionado la frase. Una o dos frases por composición como máximo; si se abusa, pierde intención.
3. **Título especial** (`SpecialTitle`). La `S|` delante de un título en caja `blue` con texto `white`. Solo una vez por composición. La caja se ajusta al final del texto. Sobre fondo `navy`, la S| va en `white`.
4. **La "S"** (`BigS`). La S gigante escondida tras un cursor, cortada por un panel. Representa el cursor como elemento en evolución, con Sngular como base. En `navy` sobre claro y en `white` sobre navy.

## Iconografía

Iconos de **Google Material Symbols** (fonts.google.com/icons), de código abierto. Se usa el estilo **Outlined**, en peso 300 o 400, sin relleno. El componente `Icon` los muestra por nombre (`arrow_forward`, `cloud`, `psychology`…).

- Color: `ink`, `blue` o un acento secundario. Tamaño 24px en UI y 48–64px en slides.
- Un icono nunca sustituye a una palabra en una acción importante: acompáñalo de texto.

## Fotografía

Las imágenes ilustran conceptos y acompañan los mensajes, así que deben tener el tono adecuado:

- **Menos es más:** imágenes sencillas, sin exceso de detalle.
- **Historias reales:** evita el stock convencional de personas excesivamente felices. Busca imágenes auténticas y de equipos reales.
- **Gama cromática limitada:** una imagen con pocos colores se integra mejor con la paleta. El blanco y negro funciona muy bien junto al cursor azul.
- **Fuentes recomendadas:** Unsplash, Lummi (IA) y los bancos internos "Banco de imágenes" e "Imágenes de Sngulares" en Drive.
- Las fotos van a sangre o recortadas en rectángulo recto, nunca redondeadas.

## Retícula y márgenes

Área segura en un lienzo de 1920×1080: `slide-margin-x` (96px) a los lados y `slide-margin-y` (144px) arriba y abajo. El título se pega al margen superior; el resto del contenido se organiza con libertad sin rebasar el margen inferior. Solo las imágenes pueden salir del área segura, y siempre a sangre. En web y apps la escala de espaciado es de base 8 (`space-1` a `space-7`).

## Accesibilidad (WCAG 2.1 AA)

- Texto normal ≥ 4.5:1 y texto grande (24px+, o 18.66px+ en SemiBold) ≥ 3:1.
- `blue` como texto solo sobre `white` (4.52:1). Sobre `navy-light` o `navy`, solo en tamaño grande.
- `green`, `chart-sky`, `chart-mint`, `chart-lime` y `chart-sun` nunca como texto sobre fondo claro.
- `red` no se usa para texto pequeño sobre blanco; un error se comunica con icono + texto en `ink`.
- El color nunca es la única señal: acompaña estados y series de gráficos con texto o etiqueta.
- Foco de teclado visible: anillo `focus` de 2px con separación de 2px.

## Cómo usar este sistema

- **Presentaciones:** sigue la sección *Presentaciones* (layouts y reglas de las plantillas de Google Slides).
- **Web y apps:** sigue la sección *Web y apps* y usa los componentes (`window.Sngular`, React 18).
- **Tema:** solo claro. Las zonas oscuras se hacen con `surface-inverse` (navy), no con un modo oscuro.

## Componentes del sistema

Si trabajas con el Design System (Artifact) o con código, estos son los componentes (`window.Sngular`, React 18):

| Componente | Para qué |
|---|---|
| `Logo` | Logotipo o isotipo, en 4 variantes |
| `Cursor` / `CursorText` | Barra azul junto a una imagen o un párrafo |
| `Highlight` | Texto seleccionado (fondo blue, texto white) |
| `SpecialTitle` | S| + caja blue con título, una vez por composición |
| `BigS` | La S gigante tras el cursor, cortada por un panel |
| `Overline` | Rótulo en mayúsculas sobre un título |
| `Button` | Botón primario, secundario o fantasma, recto |
| `Icon` | Material Symbols Outlined |
| `Input` | Campo con etiqueta, ayuda y error |
| `Stat` | Cifra destacada |
| `Card` | Tarjeta de servicio, caso o insight |

En HTML sin React, usa las clases de `tokens.css` (por ejemplo `.heading-1` o `.paragraph`) y las variables (`var(--navy)`, `var(--blue)`, `var(--slide-margin-x)`…).
