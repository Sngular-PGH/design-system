# Sngular Design System + Skill

Repository: https://github.com/Sngular-PGH/design-system

Repository for the Sngular design system (presentations, web, and apps) and the Claude skill that applies it.

| Folder | Contents |
|---|---|
| `design-system/` | Export of the **Sngular Design System**: `tokens.json`, `tokens.css`, brand guide (`README.md`), sections (`docs/`), React components (`components/`), official SVG logos, and the Outfit font. |
| `skills/sngular-design/` | Source code of the **sngular-design** skill: `SKILL.md`, references, tokens, logos, font, and a contrast script. |
| `dist/sngular-design.skill` | The packaged skill, ready to install. |
| `templates/source/` | The brand team's original document template, untouched. The skill's template is generated from it. |
| `drafts/templates/` | The US Letter document template, in review. Not part of the install. |
| `scripts/` | Maintainer scripts: `build.js` (`npm run build` / `npm run check`) and `make_templates.py` (`npm run templates`). |

## Source of truth

The living system is the **Sngular Design System** artifact in Claude:
https://claude.ai/artifact/EcM2J9oVHkk7ExgXXMwDVM

This repository is a versioned copy. When the artifact changes, re-export it here and create a commit.

Brand sources: Sngular Brand Book 2025, 2025 Editable Slide Guides and Templates, [2026 Corporate Template] Unconventional Executive Deck, and sngular.com.

## Using the tokens (web and apps)

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..400,0..1,0">
<h1 class="heading-1" style="color: var(--ink)">Your next-generation technology partner</h1>
```

Components: load React 18, `design-system/components/bundle.css`, and `design-system/components/bundle.js` (exposed as `window.Sngular`). Types are in `components/index.d.ts`.

## Installing the skill

- **Claude (claude.ai / desktop):** upload `dist/sngular-design.skill` in the skills section of settings. For an entire organization, an admin does this from the organization settings.
- **Claude Code:** run the installer (requires Node.js 16.7+), from the root of the project where you want the skill:

  ```bash
  npx github:Sngular-PGH/design-system            # this project: ./.claude/skills/sngular-design
  npx github:Sngular-PGH/design-system --global   # all your projects: ~/.claude/skills/sngular-design
  npx github:Sngular-PGH/design-system --force    # upgrade an existing install
  ```

  To install a specific version, append a tag: `npx github:Sngular-PGH/design-system#1.0.0`. Alternatively, copy `skills/sngular-design/` to either location by hand.

## Licenses

- Outfit: SIL Open Font License 1.1 (`design-system/fonts/OFL.txt`).
- Icons: Google Material Symbols (Apache 2.0).
- Logos and brand: © Sngular. Internal use per the Brand Book.

## Updating from the Design System

1. Export the artifact's files to `design-system/`.
2. Run `npm run build`. It copies the tokens, logos, and font from `design-system/` into the skill and repackages `dist/sngular-design.skill` (requires the `zip` command, available on macOS and Linux). `npm run check` only reports copies that are out of sync, without changing anything.
3. Create a commit and `git push`.
