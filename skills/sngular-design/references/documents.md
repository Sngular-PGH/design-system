# Sngular documents (Word and Google Docs)

Source: the official Sngular document template (`assets/templates/Sngular_Document_Template.docx`, US Letter; `Sngular_Document_Template_A4.docx` is the A4 version). Use this reference for proposals, guides, reports, SOWs, memos, and any deliverable in .docx or Google Docs. Color and logo rules still come from `brand-foundations.md`.

> **Always start from the template.** Never build a document from a blank file: the cover, back cover, header, footer, and styles live in the template. If the template isn't available in this environment, build it from scratch as named Word/Docs styles with exactly the values in this reference (never manual formatting), and say in the delivery note that the template wasn't used.

## 1. Font

- **Verdana** for all body content (headings, paragraphs, tables, header). Documents are edited by clients and external people, and Verdana is installed everywhere — never Outfit in the body.
- **Outfit Light** only on the cover and back cover (title, date, closing tagline). If the recipient won't have Outfit, deliver a PDF or confirm the cover renders correctly.
- Emphasis inside a paragraph: **Verdana Bold**. No underline and no italics for emphasis (the one exception is quotes — see Heading 6 below).

## 2. Page setup

| Setting | Value |
|---|---|
| Paper | US Letter (8.5 × 11 in), the default for Sngular USA. A4 (21 × 29.7 cm) only for clients outside the US (D11) |
| Margins | 1.8 cm (0.71 in) left and right, 2.54 cm (1 in) top and bottom (text area 7.08 in wide on Letter, 17.4 cm on A4) |
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
| Heading 5 | Links / table headers | Verdana 10 pt | Bold | `blue` | 10 pt after |
| Heading 6 | Quotes | Verdana 10 pt | Italic | `navy` | 10 pt after |
| Subtitle | Subtitle under the document title | Verdana 15 pt | Regular | `blue` | 16 pt after |
| Normal | Paragraphs | Verdana 10 pt | Regular | `navy` | 10 pt after, line 1.15 |

Headings keep with the next paragraph and don't split across pages. Titles are always `navy` or `blue`, never an accent color.

## 4. Lists

- Bullets: ● (level 1), ○ (level 2), ■ (level 3), with the template's indentation.
- Numbered steps: decimal `1.`, number in `blue` Bold, restart numbering for every new procedure.

## 5. Tables

| Element | Value |
|---|---|
| Width | Full text width (17.4 cm), aligned with the text |
| Header row | `blue` fill (`#0070F6`), white Verdana Bold 8 pt, repeats on each page |
| First column | Verdana 9 pt, `navy` Bold |
| Body | Verdana 9 pt, `navy` |
| Rows | Alternating `navy-light` (#F2F3F4) and `white` |
| Borders | White 0.5 pt between cells (visible gaps, no dark lines) |
| Cell padding | 0.18 cm on all sides |
| Rows | Don't split across pages |

## 6. Header, footer, cover, and back cover

- **Header (from page 2):** document title in Verdana 9 pt `blue` on the left; positive logotype on the right, 3.08 × 0.77 cm, 0.79 cm from the top edge.
- **Footer:** "Copyright © Sngular. All rights reserved." on the left, page number on the right (already in the template).
- **Cover:** full-bleed `navy` artwork with the outlined giant S cut by a `blue` cursor on the right edge and the negative logotype bottom left. Title next to the white `S|` isotype in Outfit Light 24 pt `white`; below it, a date or subtitle line in Outfit Light 12 pt `white`. Keep the title to about 30 characters so it fits on two lines. Build the cover as a single page break (D9), not a stack of empty Heading 1 paragraphs — those pollute the navigation pane and table of contents.
- **Back cover:** full-bleed `navy`, `S|` isotype with the closing tagline in Outfit Light 22 pt `white`, negative logotype at the bottom. The tagline is "The unconventional, delivered." (approved).
- The cover title text box needs an explicit line rule (`w:lineRule="auto"`), otherwise lines overlap in some editors.
- **Cover and back cover fit (D12):** when you build or change an A4 template, the full-page artwork is scaled uniformly (same factor on both axes) to the page width, placed at the page's top-left corner, and covers the whole page. The group holding it uses a 1:1 transform (`ext` equal to `chExt`), so no child gets stretched. The `S|` isotype, title, date, and back-cover tagline keep their place **relative to the artwork**, not to the page, and scale with it: on the cover the `S|` and the date line up with the left edge of the logotype, and the title starts right after the `S|` bar at the same height. On the back cover the `S|` keeps its original place (not aligned with the logo) and the tagline starts right after the bar. Text inside these text boxes has no indent (`w:ind` left/right 0): the page-margin change never moves it. Never fix a gap by stretching the image to the page: pad or crop instead. Check it in Word and Google Docs: navy edge to edge, no light hairline on any edge, the whole S and the logo visible.

## 7. Color in documents

Allowed fills for text and tables: `navy` (#061B2B), `navy-light` (#F2F3F4), `blue` (#0070F6), and `white`. Never `#4A94FF` or `#F9FBFD` — the template's color picker explicitly excludes them. Accent colors (`purple`, `green`, `red`) are not used in documents.

## 8. Extra components (proposed, pending brand approval)

Not in the template yet, but consistent with the brand's cursor resource and already used in client deliverables. Use them, but mention in the delivery note that they're pending formal approval:

- **Note (callout):** single-cell box, `navy-light` fill, 4.5 pt `blue` left border (the cursor), Verdana Bold title + Verdana 10 pt text.
- **Warning callout:** same box with `navy` fill and `white` text, for steps that must not be skipped. At most one per page.
- **Source line:** "Source:" in Verdana 8 pt muted ink + link in `blue` Bold, below a procedure that comes from official vendor documentation.
- **Diagrams:** drawn in the primary palette with Outfit, square corners, inserted as images at full text width.

## 9. Brand decisions on the template

The brand team ruled on every open question in the original template (September 2026). All of these are already applied in `assets/templates/Sngular_Document_Template.docx`; the file is generated from the brand team's original by `scripts/make_templates.py` in the repository.

| # | Topic | Decision |
|---|---|---|
| D1 | Blue | `#0070F6` everywhere (the original used `#0085FF`, which fails AA as small text on white) |
| D2 | Links and table headers | Keep Heading 5 for both |
| D3 | Table first column | `navy` Bold 9 pt (the original's `blue` failed AA on `navy-light` rows) |
| D4 | Subtitle style | Verdana 15 pt `blue` (was Arial, gray `#666666`) |
| D5 | Quotes (Heading 6) | Italic stays: quotes are the one exception to "no italics" |
| D6 | Footer | "Copyright © Sngular. All rights reserved." on the left, page number on the right |
| D7 | Normal size | 10 pt, set explicitly |
| D8 | Margins | Real 1.8 cm side margins, no negative indents. The sample table is inline and aligned with the text (the original floated it 0.29 in past the left margin), and the template carries no `#4A94FF` (the original used it on table borders and an empty heading) |
| D9 | Cover page | A single page break (was 27 empty Heading 1 paragraphs) |
| D10 | Back cover tagline | "The unconventional, delivered." approved (see `voice-and-messaging.md`) |
| D11 | Paper size | US Letter is the default (Sngular USA). The cover art keeps its proportions: scaled to the page height and aligned right, with the strip left over filled with the artwork's own navy. A4 stays available for clients outside the US |
| D12 | Cover and back cover fit | The artwork keeps its own proportions (794 × 1123 px, the A4 ratio) and covers the page from the top-left corner: never stretched, squashed, or shifted. The `S|` isotype keeps its proportions too. Overlays are placed relative to the artwork (cover `S|` and date left-aligned with the logotype) The original stretched the back cover 2.5% wide and overscaled the cover 3% |
| D13 | Language | The template ships in US English: placeholders, the quick guide, and the style samples are translated, the style-picker screenshot is in English, and the proofing language is `en-US`. For a US Spanish document, use the same template, write the placeholders in Spanish, and set the proofing language to `es-US` |

## 10. What's inside the template file

Both template files have every decision in section 9 applied, with US English placeholders. Know their parts before editing:

| Part | Where it lives | What to do |
|---|---|---|
| Cover | First-page header (navy artwork + text boxes "Add your title here" and "Month Day, Year") | Replace both placeholders with the real title and date (US format: October 7, 2026) |
| Page header (from page 2) | Default header, placeholder "Document title" | Replace with the real document title |
| Footer | Default footer, copyright line and page number | Keep as is |
| "Quick guide" | Body page 2: usage guide, color swatches, style-picker screenshot | Delete entirely |
| Style samples | Body: "Heading and paragraph styles", lorem ipsum per heading, sample table under "Tables" | Delete the text; keep the table only as a starting point for your own tables |
| Back cover | Last page of the body, after the final page break ("The unconventional, delivered.") | Keep as is |

Also:

### Documents without a cover (brief / memo, meeting notes)

The template's first page is the cover, so a document type without one (see *Document types* below) needs three edits to the copy before you write:

1. **Turn off the different first page.** In the body's last `w:sectPr`, delete `<w:titlePg/>` and the two `headerReference` / `footerReference` entries with `w:type="first"`. Page 1 then uses the default header (document title + logotype) and footer (copyright + page number). In Word: *Layout › Margins › Custom Margins › Layout › uncheck "Different first page"*; in Google Docs: *Format › Headers & footers › uncheck "Different first page"*.
2. **Delete the back cover:** the last page break and the group with "The unconventional, delivered." at the end of the body.
3. **Delete the quick guide and the style samples**, as for any document (see the table above).

Start the body with **Title** (the document name) and **Subtitle** (one line: the subject or the takeaway). For a memo, follow with To / From / Date lines in Normal, each label in Verdana Bold, then section headings in Heading 3 (Heading 1 is too big for one page). Build tables to section 5's spec; the template's sample table is only a starting point.

- Older copies of the template people have saved (with `#0085FF`, 2.54 cm margins, or empty headings before the guide) are outdated: always start from this file.
- The document language is US English (`en-US`). For a Spanish document, change it to US Spanish (`es-US`) in the styles and the body so spell check works for the reader.
- For Google Docs, upload the finished .docx to Drive and open it with Google Docs; check that the cover and header images survived the conversion.

## 11. How to build a document (step by step)

1. **Confirm the type and audience.** Proposal, report, brief, case study, or meeting notes — each has different cover/back-cover requirements (see the table below).
2. **Start from a copy of `assets/templates/Sngular_Document_Template.docx`** and clean it up as section 10 describes. Never a blank file. If it isn't available, build it from scratch as named Word/Docs styles with exactly the values in this reference (never manual formatting), and say in the delivery note that the template wasn't used.
3. **Write the cover:** title (≤30 characters for two lines), date or event, in Outfit Light on navy.
4. **Use only template styles** for every heading level and Normal — no manual font sizes or ad hoc colors.
5. **Tables and lists** follow sections 4–5 above exactly; don't invent new table styles.
6. **Run the checklist** below before delivering.

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
- [ ] Emphasis in Verdana Bold; no underline or italic emphasis (quotes in Heading 6 excepted).
- [ ] Tables: `blue` (#0070F6) header with white text, zebra rows, white cell borders, `navy` Bold first column.
- [ ] Only `navy`, `navy-light`, `blue`, `white`. No `#4A94FF`, `#F9FBFD`, or accent colors.
- [ ] Header shows the real document title; cover title fits in two lines.
- [ ] No lorem ipsum, no leftover template instructions or style samples.
- [ ] Placeholders to confirm are clearly marked.
- [ ] A single language throughout (en-US or es-US), with US formats for dates, numbers, and currency.
- [ ] No `#0085FF` anywhere (it comes from outdated copies of the template or pasted content).
