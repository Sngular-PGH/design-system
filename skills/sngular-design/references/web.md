# Web Sngular

Cómo trasladar la marca a sitios web (prioridad 2) y a apps (prioridad 3). La referencia es sngular.com.

## Principios

- **Tema claro** por defecto (`surface` white). Las zonas oscuras (hero, bandas de cifras, pie) usan `surface-inverse` (navy) con `ink-inverse`.
- **Recto:** `radius-none` en botones, tarjetas, imágenes y campos.
- **Azul con propósito:** `accent` para la acción principal, enlaces, cursor y resaltado. Un solo botón `primary` por vista.
- **Tipografía:** en escritorio, los estilos de marca (`display-*`, `heading-*`, `paragraph`); en móvil, `ui-*` para cuerpo y controles, y los headings escalados (heading-1 → 32px, heading-2 → 24px).
- **Iconos:** Material Symbols Outlined a 24px.

## Patrones de página (sngular.com)

- **Cabecera:** logotipo positivo a la izquierda (≥ 36px de alto), navegación en `ui-label`, selector ES/EN y botón "Contact".
- **Hero:** foto a sangre con título `display-1` o `display-2`; el claim se destaca con `Highlight` o `SpecialTitle`; botón primario.
- **Cifras:** `Stat` en fila (+1300 People, +500 Clients, +900 Projects…) sobre `surface-alt` o navy.
- **Servicios:** tarjetas con imagen rectangular, `heading-3`, párrafo y enlace con icono `arrow_forward`.
- **Casos de éxito e Insights:** tarjetas con overline (sector o fecha), título y "Know more".
- **Formulario de contacto:** campos `Input` con etiqueta visible, botón primario.
- **Pie:** fondo navy, logotipo negativo, enlaces en `ui-caption` white.

## Formatos

- **Web de escritorio:** contenedor máximo de 1280–1440px con márgenes laterales de 96px (`slide-margin-x`), que bajan a `space-4`/`space-3` en móvil.
- **Landing:** hero → propuesta de valor → cifras → servicios o beneficios → caso de éxito con testimonio → llamada a la acción → pie.
- **Newsletter o email:** 600px de ancho, Outfit con Verdana como alternativa (muchos clientes de correo no cargan fuentes web), logotipo positivo arriba y un solo botón primario.
- **Redes sociales:** foto impactante o vídeo; si hay texto, un titular con `Highlight` o la S escondida tras el cursor. Formatos 1080×1080 y 1080×1350.

## Código

- Carga `assets/tokens.css` y usa sus variables y clases; no copies los HEX a mano.
- Carga Outfit (`assets/fonts/` o Google Fonts) y Material Symbols Outlined (Google Fonts).
- Contraste AA, foco visible y HTML semántico. Nada de `border-radius`, salvo en avatares.
