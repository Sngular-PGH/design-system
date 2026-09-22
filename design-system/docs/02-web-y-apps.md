# Web y apps

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

## Componentes

Los componentes de este sistema (`window.Sngular`) están pensados para web y apps: `Logo`, `Cursor`, `CursorText`, `Highlight`, `SpecialTitle`, `BigS`, `Overline`, `Button`, `Icon`, `Input`, `Stat` y `Card`. Los estados interactivos (hover, focus, disabled) están definidos en `bundle.css`.

## Apps

- Icono de app: isotipo `S|` positivo sobre white o negativo sobre navy (iOS y Android).
- Barra de navegación inferior con iconos Outlined 24px + etiqueta; activo en `accent`.
- Área táctil mínima de 44×44px.
