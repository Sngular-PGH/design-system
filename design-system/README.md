# Sngular

Sngular's design system for presentations, websites, and apps. It is the single source of truth for color, typography, spacing, logotypes, graphic resources, and components. It was built from the **Sngular Brand Book 2025**, the **2025 Editable Slide Guides and Templates**, and **sngular.com**. Anything not sourced from those is marked as *derived for UI*.

> Usage priority: 1) presentations, 2) websites, 3) apps, 4) documents. Languages: Spanish and English. Theme: light only. Accessibility: WCAG 2.1 AA.

## Concept: the cursor

A blinking cursor is an invitation: *create, write*. **The cursor is an idea that wants to grow big**, and Sngular is the technological foundation that makes it real. That's why the **S** always appears next to a **cursor** (`S|`). The cursor is the brand's dynamic, transformative, emphasis element throughout: it opens a subtitle or paragraph, accompanies images, selects and highlights text, and builds special titles.

## Voice and tone

Sngular is a *next-generation technology partner*: unconventional, technical, and self-assured. It speaks with clarity and ambition, without grandiloquence.

- **Do:** short, affirmative sentences ("We don't just follow trends — we engineer the future"); concrete data (+1,300 people, +500 clients, 11 regions); action verbs; a single standout message per composition.
- **Don't:** empty superlatives, stock advertising tone, exclamation marks, emojis, unexplained jargon.
- **Bilingual:** Spanish and English. Spanish text runs ~20% longer: leave breathing room in boxes. Don't mix languages within the same piece, except for service names (Data & AI, Cloud Integration…).
- **Name:** always written **Sngular** in running text; `S|NGULAR` only as the logotype. For a service or sub-brand, use the written signature "by Sngular," never the logo with a hyphen.

## Color

Two palettes: **primary (95% of use)** and **secondary (5%, accents)**.

| Palette | Token | HEX | CMYK (print) |
|---|---|---|---|
| Primary | `navy` | #061B2B | 90/75/55/68 |
| Primary | `navy-light` | #F2F3F4 | 4/2/2/0 |
| Primary | `white` | #FFFFFF | 0/0/0/0 |
| Primary | `blue` | #0070F6 | 85/47/1/0 |
| Secondary | `purple` | #9747FF | — |
| Secondary | `green` | #B3E500 | — |
| Secondary | `red` | #FF0059 | — |

Brand book rules:

1. **The primary palette is the star.** Backgrounds and typography use `navy`, `navy-light`, `white`, and `blue`.
2. **Titles are always in a primary color** (`ink` or `blue`), never an accent color.
3. **Never use accent colors for paragraphs.** `purple`, `green`, and `red` are for icons, lines, and small eye-catching elements.
4. **Never use a solid accent-color box with text.** A solid box with a lot of text sacrifices legibility.
5. **Paragraphs:** `navy` on a white background; `white` on a dark background.
6. **Alternative palette** (`chart-*`: Violet, Bolt, Sky, Mint, Lime, Sun, Coral, Magenta): only for charts and roadmaps with many series. Never as the predominant color.

Semantic tokens (`surface`, `surface-alt`, `surface-inverse`, `ink`, `ink-inverse`, `accent`, `on-accent`, `focus`, `danger`) map to the palette. Use them in web and apps instead of color names.

## Typography

**Outfit** is the primary typeface, for everything. **Verdana** is the auxiliary one: only in documents a client or an external person will edit (see the *Documents* section), or in environments without Outfit. Outfit is openly licensed (Google Fonts, OFL): it can be used in web and apps without restriction.

| Style | Weight | Size / line-height | Use |
|---|---|---|---|
| `display-1` | SemiBold 600 | 92 / 98 | Standalone headline of maximum impact |
| `display-2` | SemiBold 600 | 65 / 70 | Featured headline |
| `display-2-regular` | Regular 400 | 65 / 70 | Large phrase or quote |
| `heading-1` | SemiBold 600 | 48 / 52 | Slide or page title |
| `heading-1-light` | Light 300 | 48 / 52 | Editorial title |
| `heading-2` | Regular 400 | 32 / 38 | Subtitle, mainly in `blue` |
| `heading-3` | SemiBold 600 | 22 / 30 | Block title |
| `paragraph-big` | Regular 400 | 24 / 36 | Only alongside a display style |
| `paragraph` | Regular 400 | 20 / 30 | Standard paragraph |
| `overline` | SemiBold 600 | 18 / 24 | UPPERCASE, introduces a title |
| `auxiliary` | Light 300 | 14 / 24 | Secondary text, captions, copyright |

Sizes are defined for a **1920×1080** canvas (slides and desktop web). On mobile, use the `ui-*` styles, which are derived for UI.

- To highlight words within a paragraph, use **Outfit Bold (700)** or the **Highlight** component. Never underline or italics for emphasis.
- `paragraph` and `paragraph-big` are not combined in the same composition.
- Letter-spacing is 0 across all styles.
- Avoid widows: no line should end with a single stray word.

## Logotype

The logotype is `S|NGULAR`: the S, the blue cursor, and NGULAR. Always use the original files from the **Logos** group; never redraw it.

- **Positive** (`Logotype_Positive.svg`): navy + blue cursor, on light backgrounds.
- **Negative** (`Logotype_Negative.svg`): white + blue cursor, on navy or dark photography.
- **Solid** (`Logotype_Solid_Navy.svg`, `Logotype_Solid_White.svg`): for small sizes or backgrounds where blue doesn't contrast.
- **Clear space:** if the logotype measures `3x` wide and `1.5y` tall, leave `x` of free space on each side (a third of its width) and `y` above and below (two-thirds of its height). No graphic element may enter that space.
- **Minimum size:** 24px tall for the solid version (`logo-min-solid`) and 36px for the color versions (`logo-min-color`).
- **Isotype** `S|`: the symbolic reduction of the brand, with no text. Used as a profile avatar, app icon, favicon, in the top-right corner of slides, and as a graphic resource.

## Graphic resources

These are the brand's visual DNA. Use them with intention and moderation.

1. **Cursor** (`Cursor`, `CursorText` components). A vertical `blue` bar marking the start of something: it accompanies a paragraph (`cursor-text` thickness) or an image or panel (`cursor-image` thickness, bleeding on one side).
2. **Selected text** (`Highlight`). `blue` background with `white` text, as if the cursor had selected the phrase. One or two phrases per composition at most; overuse loses its intent.
3. **Special title** (`SpecialTitle`). The `S|` in front of a title in a `blue` box with `white` text. Only once per composition. The box fits the end of the text. On a `navy` background, the S| is `white`.
4. **The "S"** (`BigS`). The giant S hidden behind a cursor, cut by a panel. It represents the cursor as an evolving element, with Sngular as its foundation. `navy` on light, `white` on navy.

## Iconography

Icons from **Google Material Symbols** (fonts.google.com/icons), open source. Use the **Outlined** style, weight 300 or 400, unfilled. The `Icon` component renders them by name (`arrow_forward`, `cloud`, `psychology`…).

- Color: `ink`, `blue`, or a secondary accent. Size 24px in UI and 48–64px in slides.
- An icon never replaces a word in an important action: pair it with text.

## Photography

Images illustrate concepts and support messages, so they need the right tone:

- **Less is more:** simple images, without excessive detail.
- **Real stories:** avoid conventional stock photos of overly happy people. Look for authentic images of real teams.
- **Limited color range:** an image with few colors integrates better with the palette. Black and white works very well alongside the blue cursor.
- **Recommended sources:** Unsplash, Lummi (AI), and the internal "Image Bank" and "Images of Sngulars" libraries on Drive.
- Photos bleed off the edge or are cropped to a straight rectangle, never rounded.

## Grid and margins

Safe area on a 1920×1080 canvas: `slide-margin-x` (96px) on the sides and `slide-margin-y` (144px) top and bottom. The title sits flush with the top margin; the rest of the content is arranged freely without crossing the bottom margin. Only images may exit the safe area, and always as a bleed. In web and apps, the spacing scale is base-8 (`space-1` to `space-7`).

## Accessibility (WCAG 2.1 AA)

- Normal text ≥ 4.5:1 and large text (24px+, or 18.66px+ in SemiBold) ≥ 3:1.
- `blue` as text only on `white` (4.52:1). On `navy-light` or `navy`, only at large sizes.
- `green`, `chart-sky`, `chart-mint`, `chart-lime`, and `chart-sun` are never used as text on a light background.
- `red` is not used for small text on white; an error is communicated with an icon + text in `ink`.
- Color is never the only signal: pair states and chart series with text or a label.
- Visible keyboard focus: 2px `focus` ring with 2px offset.

## How to use this system

- **Presentations:** follow the *Presentations* section (layouts and rules for the Google Slides templates).
- **Web and apps:** follow the *Web and apps* section and use the components (`window.Sngular`, React 18).
- **Documents:** follow the *Documents* section; always start from the official Sngular Document Template, never a blank file.
- **Theme:** light only. Dark areas are made with `surface-inverse` (navy), not a dark mode.
