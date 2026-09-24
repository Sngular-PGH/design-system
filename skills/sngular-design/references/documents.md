# Sngular documents (Word and Google Docs)

Source: the official Sngular document template (`assets/templates/Sngular_Document_Template.docx`). Use this reference for proposals, guides, reports, SOWs, memos, and any deliverable in .docx or Google Docs. Color and logo rules still come from `brand-foundations.md`.

> **Always start from the template.** Never build a document from a blank file: the cover, back cover, header, footer, and styles live in the template. If the template isn't available in this environment, build it from scratch as named Word/Docs styles with exactly the values in this reference (never manual formatting), and say in the delivery note that the template wasn't used.

## 1. Font

- **Verdana** for all body content (headings, paragraphs, tables, header). Documents are edited by clients and external people, and Verdana is installed everywhere — never Outfit in the body.
- **Outfit Light** only on the cover and back cover (title, date, closing tagline). If the recipient won't have Outfit, deliver a PDF or confirm the cover renders correctly.
- Emphasis inside a paragraph: **Verdana Bold**. No underline and no italics for emphasis (the one exception is quotes — see Heading 6 below).

## 2. Page setup

| Setting | Value |
|---|---|
| Paper | A4 (21 × 29.7 cm). For clients in the US or Canada, confirm whether Letter is needed |
| Margins | 2.54 cm on all sides |
| Effective text area | The template pulls content 0.75 cm into the left margin and 0.82 cm into the right (text starts 1.79 cm from the edge) |
| Header / footer distance | 1 cm |
| First page | Different first page: the cover lives in the first-page header |

## 3. Paragraph styles

Use only the styles in the template. Don't create new styles or format text by hand.

| Word style | Use | Font / size | Weight | Color | Spacing |
|---|---|---|---|---|---|
| Title | Document title (inside the document, not the cover) | Verdana 22 pt | Regular | `navy` | 3 pt after |
| Heading 1 | Section title | Verdana 22 pt | Regular | `navy` | 3 pt after |
| Heading 2 | Subsection | Verdana 18 pt | Regular | `navy` | 10 pt after |
| Heading 3 | Block | Verdana 13 pt | Regular | `navy` | 10 pt after |
| Heading 4 | Sub-block | Verdana 12 pt | Regular | `navy` | 10 pt after |
| Heading 5 | Links / table headers (see D2) | Verdana 10 pt | Bold | `blue` | 10 pt after |
| Heading 6 | Quotes | Verdana 10 pt | Italic | `navy` | 10 pt after |
| Normal | Paragraphs | Verdana 10 pt | Regular | `navy` | 10 pt after, line 1.15 |

Headings keep with the next paragraph and don't split across pages. Titles are always `navy` or `blue`, never an accent color.

## 4. Lists

- Bullets: ● (level 1), ○ (level 2), ■ (level 3), with the template's indentation.
- Numbered steps: decimal `1.`, number in `blue` Bold, restart numbering for every new procedure.

## 5. Tables

| Element | Value |
|---|---|
| Width | Full text width (17.5 cm), same left offset as the text (−0.75 cm) |
| Header row | `blue` fill (D1: use `#0070F6`, not the template's `#0085FF` — see decisions below), white Verdana Bold 8 pt, repeats on each page |
| First column | Verdana 9 pt, `navy` Bold (D3 fix applied — the template's `blue` first column fails AA) |
| Body | Verdana 9 pt, `navy` |
| Rows | Alternating `navy-light` (#F2F3F4) and `white` |
| Borders | White 0.5 pt between cells (visible gaps, no dark lines) |
| Cell padding | 0.18 cm on all sides |
| Rows | Don't split across pages |

## 6. Header, footer, cover, and back cover

- **Header (from page 2):** document title in Verdana 9 pt `blue` on the left; positive logotype on the right, 3.08 × 0.77 cm, 0.79 cm from the top edge.
- **Footer:** page number on the right, "Copyright © Sngular. All rights reserved." on the left (D6 — apply the same footer line used on slides until the brand team confirms otherwise).
- **Cover:** full-bleed `navy` artwork with the outlined giant S cut by a `blue` cursor on the right edge and the negative logotype bottom left. Title next to the white `S|` isotype in Outfit Light 24 pt `white`; below it, a date or subtitle line in Outfit Light 12 pt `white`. Keep the title to about 30 characters so it fits on two lines. Build the cover as a single page break (D9), not a stack of empty Heading 1 paragraphs — those pollute the navigation pane and table of contents.
- **Back cover:** full-bleed `navy`, `S|` isotype with the closing tagline in Outfit Light 22 pt `white`, negative logotype at the bottom. Confirm the tagline copy against `voice-and-messaging.md` before using it (D10) — it isn't in the approved messages list yet.
- The cover title text box needs an explicit line rule (`w:lineRule="auto"`), otherwise lines overlap in some editors.

## 7. Color in documents

Allowed fills for text and tables: `navy` (#061B2B), `navy-light` (#F2F3F4), `blue` (#0070F6), and `white`. Never `#4A94FF` or `#F9FBFD` — the template's color picker explicitly excludes them. Accent colors (`purple`, `green`, `red`) are not used in documents.

## 8. Extra components (proposed, pending brand approval)

Not in the template yet, but consistent with the brand's cursor resource and already used in client deliverables. Use them, but mention in the delivery note that they're pending formal approval:

- **Note (callout):** single-cell box, `navy-light` fill, 4.5 pt `blue` left border (the cursor), Verdana Bold title + Verdana 10 pt text.
- **Warning callout:** same box with `navy` fill and `white` text, for steps that must not be skipped. At most one per page.
- **Source line:** "Source:" in Verdana 8 pt muted ink + link in `blue` Bold, below a procedure that comes from official vendor documentation.
- **Diagrams:** drawn in the primary palette with Outfit, square corners, inserted as images at full text width.

## 9. Open decisions — apply these fixes now, follow the template for everything else

The template itself has a few inconsistencies the brand team hasn't ruled on yet. Until they do, apply **D1, D3, D7, and D9** automatically in every client deliverable (they're accessibility or correctness fixes); for the rest, follow the template as-is and flag the gap in the delivery note.

| # | Topic | Template today | Applied fix |
|---|---|---|---|
| D1 | Blue | `#0085FF` (fails AA as small text on white, 3.62:1) | Use `#0070F6` (4.52:1) — **applied** |
| D2 | Links and table headers | Styled with Heading 5, so they appear in the outline/TOC | Pending: a dedicated "Link" and "Table header" style |
| D3 | Table first column | `blue` 9 pt, fails AA on `navy-light` rows | `navy` Bold 9 pt — **applied** |
| D4 | Subtitle style | Arial 15 pt gray `#666666` (off-brand) | Pending: Verdana, navy or blue, or remove the style |
| D5 | Quotes (Heading 6) | Italic | Pending: confirm quotes are the one exception to "no italics" |
| D6 | Footer | Page number only | Applying the slide convention ("Copyright © Sngular…") until confirmed |
| D7 | Normal size | Not set explicitly (Word defaults to 10 pt) | Set 10 pt explicitly — **applied** |
| D8 | Margins | Negative indents / invalid OOXML decimal values | Pending: real 1.8 cm margins |
| D9 | Cover page | ~27 empty Heading 1 paragraphs (pollutes navigation pane) | Single page break — **applied** |
| D10 | Back cover tagline | "The unconventional, delivered." (not an approved message) | Pending confirmation, or add to `voice-and-messaging.md` |
| D11 | Paper size | A4 only | Pending: a Letter version for North American clients |

## 10. What's inside the template file

`assets/templates/Sngular_Document_Template.docx` is the brand team's raw template, in Spanish. Know its parts before editing it:

| Part | Where it lives | What to do |
|---|---|---|
| Cover | First-page header (navy artwork + text boxes "Pon el título aquí" and "Día / Mes / Año") | Replace both placeholders with the real title and date |
| Page header (from page 2) | Default header, placeholder "Título del Documento" | Replace with the real document title |
| Footer | Default footer, page number only | Add "Copyright © Sngular. All rights reserved." on the left (D6) |
| Cover spacer | 27 empty Heading 1 paragraphs at the start of the body | Replace with a single page break (D9) |
| "Guía rápida" | Body page 2: usage guide, color swatches, style-picker screenshot | Delete entirely |
| Style samples | Body: "Estilos de título y párrafos", lorem ipsum per heading, sample table under "Tablas" | Delete the text; keep the table only as a starting point for your own tables |
| Back cover | Last page of the body, after the final page break ("The unconventional, delivered.") | Keep; confirm the tagline (D10) |

Also:

- The raw file still has `#0085FF` in Heading 5, the table header, and the first column. Replace it everywhere (styles and direct formatting) as D1 and D3 describe.
- Normal has no explicit size; set it to 10 pt (D7).
- The document language is set to Spanish (`es`). For an English document, change it so spell check works for the recipient.
- For Google Docs, upload the finished .docx to Drive and open it with Google Docs; check that the cover and header images survived the conversion.

## 11. How to build a document (step by step)

1. **Confirm the type and audience.** Proposal, report, brief, case study, or meeting notes — each has different cover/back-cover requirements (see the table below).
2. **Start from a copy of `assets/templates/Sngular_Document_Template.docx`** and clean it up as section 10 describes. Never a blank file. If it isn't available, build it from scratch as named Word/Docs styles with exactly the values in this reference (never manual formatting), and say in the delivery note that the template wasn't used.
3. **Write the cover:** title (≤30 characters for two lines), date or event, in Outfit Light on navy.
4. **Use only template styles** for every heading level and Normal — no manual font sizes or ad hoc colors.
5. **Tables and lists** follow sections 4–5 above exactly; don't invent new table styles.
6. **Apply the D1/D3/D7/D9 fixes** regardless of what the raw template does.
7. **Run the checklist** below before delivering.

## Document types

| Type | Use | Cover + back cover? |
|---|---|---|
| **Proposal / SOW** | Client-facing scope, pricing, timeline | Yes |
| **Report** | Status, findings, analysis, retro | Yes if 3+ pages |
| **Brief / memo** | Internal short-form, 1–2 pages | No |
| **Case study (written)** | Long-form success story, client-safe | Yes |
| **Meeting notes** | Internal record, agenda + decisions | No |

## Checklist before delivering a document

- [ ] Built from the template: cover, header, footer, back cover in place (or, if the template was unavailable, rebuilt from this reference's styles and flagged in the delivery note).
- [ ] Only template styles; no manual font sizes or colors in the body.
- [ ] Verdana in the body, Outfit Light only on the covers.
- [ ] Emphasis in Verdana Bold; no underline or italic emphasis (quotes excepted, pending D5).
- [ ] Tables: `blue` (#0070F6) header with white text, zebra rows, white cell borders, `navy` Bold first column.
- [ ] Only `navy`, `navy-light`, `blue`, `white`. No `#4A94FF`, `#F9FBFD`, or accent colors.
- [ ] Header shows the real document title; cover title fits in two lines.
- [ ] No lorem ipsum, no leftover template instructions or style samples.
- [ ] Placeholders to confirm are clearly marked.
- [ ] Single language throughout.
- [ ] D1, D3, D7, D9 fixes applied even if the raw template still has the old values.
