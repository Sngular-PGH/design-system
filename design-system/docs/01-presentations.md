# Presentations

Guide for Sngular decks in 16:9 (1920×1080), based on the **2025 Editable Slide Guides and Templates**. This is the system's top priority.

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
