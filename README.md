# Sngular Design System + Skill

Repositorio: https://github.com/Sngular-PGH/design-system

Repositorio del sistema de diseño de Sngular (presentaciones, web y apps) y de la skill de Claude que lo aplica.

| Carpeta | Contenido |
|---|---|
| `design-system/` | Exportación del **Sngular Design System**: `tokens.json`, `tokens.css`, guía de marca (`README.md`), secciones (`docs/`), componentes React (`components/`), logos SVG oficiales y la fuente Outfit. |
| `skills/sngular-design/` | Código fuente de la skill **sngular-design**: `SKILL.md`, referencias, tokens, logos, fuente y un script de contraste. |
| `dist/sngular-design.skill` | La skill empaquetada, lista para instalar. |

## Fuente de verdad

El sistema vivo es el artefacto **Sngular Design System** en Claude:
https://claude.ai/artifact/EcM2J9oVHkk7ExgXXMwDVM

Este repositorio es una copia versionada. Cuando cambie el artefacto, vuelve a exportarlo aquí y crea un commit.

Fuentes de la marca: Brand Book Sngular 2025, Guías y Modelos de Slides Editables 2025, [2026 Corporate Template] Unconventional Executive Deck y sngular.com.

## Usar los tokens (web y apps)

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..400,0..1,0">
<h1 class="heading-1" style="color: var(--ink)">Your next-generation technology partner</h1>
```

Componentes: carga React 18, `design-system/components/bundle.css` y `design-system/components/bundle.js` (se expone como `window.Sngular`). Los tipos están en `components/index.d.ts`.

## Instalar la skill

- **Claude (claude.ai / desktop):** sube `dist/sngular-design.skill` en la sección de skills de la configuración. Para toda la organización, lo hace un administrador desde la configuración de la organización.
- **Claude Code:** copia `skills/sngular-design/` a `.claude/skills/sngular-design/` (del proyecto) o a `~/.claude/skills/sngular-design/` (personal).

## Licencias

- Outfit: SIL Open Font License 1.1 (`design-system/fonts/OFL.txt`).
- Iconos: Google Material Symbols (Apache 2.0).
- Logos y marca: © Sngular. Uso interno según el Brand Book.

## Actualizar desde el Design System

1. Exporta los archivos del artefacto a `design-system/` y, si cambias la skill, vuelve a empaquetarla en `dist/`.
2. Crea un commit y haz `git push`.
