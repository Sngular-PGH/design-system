# Presentaciones

Guía para decks de Sngular en 16:9 (1920×1080), basada en las plantillas **Guías y Modelos de Slides Editables 2025**. Es la prioridad número uno del sistema.

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
