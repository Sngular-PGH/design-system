# Sngular Presentations

16:9 canvas at 1920×1080. Sources: "2025 Editable Slide Guides and Templates" and "[2026 Corporate Template] Unconventional Executive Deck".

## Layout rules

- **Respect the safe area:** `slide-margin-x` (96px) and `slide-margin-y` (144px). No text or element exits it, except bleeding images.
- **Title flush with the top margin**, in 1 or 2 lines. If it doesn't fit, stretch the box to the right rather than add a third line.
- **`S|` isotype top right** and **logotype + "Copyright © Sngular. All rights reserved"** bottom left, in `auxiliary`.
- **Align everything:** when finished, remove the guides and check that boxes are top-aligned across columns and vertically centered against the photo or the S.
- **One idea per slide.** A single special title and at most one or two highlights per composition.
- **Color:** primary palette only by default. Secondaries only when parts of a slide need to be distinguished.
- **Text over photo:** `white` if the image is dark, `navy` if it's light. Highlight with a `blue` background.
- Always fit the box to the end of the text; don't leave empty boxes or widows.

## Layout catalog

| # | Layout | Background | Composition |
|---|---|---|---|
| 1 | **Cover** | `navy` | Presentation title in white `display-2`, date in `paragraph`, giant S and cursor. |
| 2 | **Section divider** | `navy`, `navy-light`, or `blue` | Large section title with the S; three background variants. |
| 3 | **1-column text** | `white` | Title + `heading-2` blue subtitle + paragraph with bullets (up to 4 levels). |
| 4 | **Text + image** | `white` | Title, subtitle, paragraph with bullets, and a rectangular photo with a cursor beside it. |
| 5 | **Half-page photo** | `white` / `navy-light` | Bleeding photo on one side; title and paragraph vertically centered against the photo. |
| 6 | **Title with S** | `white` | Large title vertically centered against the `S|`, paragraph beside it. |
| 7 | **Bleeding photo with text** | photo | Long title over a dark or gradient legibility rectangle; don't move the box. |
| 8 | **Quote** | colored photo | Quote in centered `display-2-regular` with the S; the image is tinted with the palette. |
| 9 | **Impact statement** | `navy` / `blue` | One short, centered sentence in `display-1` or `display-2`. |
| 10 | **Special title** | `white` / `navy` | `SpecialTitle` + paragraph. |
| 11 | **Blocks (3 or 4)** | `white` | `heading-3` block title + paragraph per block, top-aligned; image with cursor. |
| 12 | **Numbered steps 01–04** | `white` / `navy` | Large `display-2` numbers + paragraph title + text. |
| 13 | **Diagram, table, or map** | `white` | Title + diagram, table, or icon map; optional side paragraph. |
| 14 | **Table** | `white` | Table title, `navy` header with white text, alternating `navy-light` rows. |
| 15 | **Clients by sector** | `white` | "Over 1,200 clients": grid of sectors with icons. |
| 16 | **Big number / meet** | `navy-light` | Key statement readable on a video call + text blocks. |
| 17 | **Success story** | photo | Project photo + 2 paragraphs (challenge and solution). |
| 18 | **Team** | `white` | Rectangular photos + Name (`heading-3`) + Role (`auxiliary`). |
| 19 | **Partners** | `white` | "Our partners are your partners" + partner logos in gray. |
| 20 | **Closing** | `navy` / `blue` | "Thank you" + contact. |

## Using resources on slides

- **Cursor with text:** `blue` bar of `cursor-text` thickness to the left of the paragraph, aligned with its first line.
- **Cursor with image:** `blue` bar of `cursor-image` thickness flush against the edge of the photo.
- **S| in a title:** the S goes in front of white text on a blue background. On navy, the S| is white.
- **Highlight:** semibold or `blue` background with white text, without overusing it.

## Charts

Charts use `navy`, `blue`, and `navy-light` first; if more series are needed, use the `chart-*` palette. Always label values: color is never the only signal.

## How to build a deck (step by step)

1. **Understand the goal and the audience.** Client proposal, executive presentation, success story, internal, or event. If it isn't stated, ask only for the goal and the audience, in one sentence.
2. **Write the story first.** One headline per slide, readable on its own, and then the content. If the structure isn't clear, propose the outline before designing.
3. **Assign a layout from the catalog to each slide.** Don't repeat the same layout more than three times in a row.
4. **Color rhythm:** cover in navy → content in white → section divider (navy, navy-light, or blue) → content → impact statement → closing in navy or blue.
5. **Apply the checklist from SKILL.md** to each slide.

## Recommended deck structures

**Executive presentation** ("Unconventional Executive Deck" 2026 pattern):

1. Cover: "Unconventional Executive Deck" or the meeting's title.
2. "We are Sngular, your next generation technology partner. This presentation is about you."
3. For each client challenge, three slides:
   - Full-screen provocative question (layout 9, impact statement): "Would you build a new business focused on wellbeing?"
   - Testimonial (layout 8, quote): the client's own words, with name, title, and company.
   - Case (layout 17): case title with a subtitle, and the **Challenge / Solution / Results** blocks, with results as figures.
4. "All your concerns boil down to one of these four questions…": the four blocks "right team / right tools / right processes / right outcomes" (layout 11).
5. Transition question: "We'd love to hear your questions. Because you are Unconventional and we always Deliver."
6. "We are Sngular" divider, followed by About Sngular, figures (Overview), "One Sngular, Multiple Studios," services, industries, global presence, tech stack, partners, certifications, and ESG.
7. Closing: "Now you know us. Would you consider exploring a next step?" + "Thank you for your attention! Let's keep this conversation open! business@sngular.com".

**Client proposal:** cover → client context (their challenge, in their words) → objectives → approach and solution → phases and timeline (layout 12) → team (layout 18) → related cases (layout 17) → collaboration or investment model → why Sngular (Stat + pillars) → next steps → closing.

**Success story (1–3 slides):** question or headline → testimonial → Challenge / Solution / Results with 2–3 figures.

## Slide recipes

- **Cover:** `navy` background. Title in white `display-2` (max 2 lines), date or event in white `paragraph`, negative logotype bottom left, and giant S with cursor on the right.
- **Divider:** `navy`, `navy-light`, or `blue` background. Title in `display-2` next to the S|. With navy or blue background, white text; with navy-light, navy text.
- **Content:** `white` background. Title in `heading-1`, optional subtitle in `heading-2` blue, text in `paragraph`, and at most 6 bullets.
- **Impact statement or question:** a single sentence in `display-1`/`display-2`, centered or aligned to the margin, with a key word in `Highlight`.
- **Quote:** typographic quotation marks, `display-2-regular`, and the author in `heading-3` + `auxiliary` (title, company).
- **Stats:** 3–4 `Stat` in a row over `navy-light` or `navy`. Always with a label and the figure's date ("Dec 2024").
- **Challenge / Solution / Results:** three blocks with `overline` + paragraph; Results as a short list of figures in `heading-3`.
- **Closing:** `navy` or `blue` background, "Thank you" in `display-1`, and the contact business@sngular.com.

## Density and text

- A one-line headline (two at most) that's understandable without reading the rest.
- 40–60 words per content slide. If there's more, split the slide or move the text to speaker notes.
- Put the detail in speaker notes, not on the slide.
- Never put text over a solid accent-color box.
