# US Letter template — in review

`Sngular_Document_Template_Letter.docx` is the US Letter (8.5 × 11 in) version of the Sngular document template, for clients in the US and Canada. It isn't part of the skill install until the brand team approves it; until then, documents use the A4 template.

It's generated with `npm run templates`, from the brand team's original in `templates/source/`. Don't edit it by hand: change `scripts/make_templates.py` and regenerate.

## How it differs from the A4 template

It has the same styles and decisions as the official A4 template (see `skills/sngular-design/references/documents.md`, section 9), plus:

- Page size 21.59 × 27.94 cm, with the same 1.8 cm side margins.
- The cover and back cover keep the whole artwork: nothing is cropped or stretched. Letter is wider and shorter than A4, so the art is scaled to the page height (94%) and aligned right, keeping the blue edge on the page edge. The 1.8 cm strip left over on the left is filled with the artwork's own navy.
- The cover title, date, and header logo move with the artwork and the wider page.

## How to review

Open the file in **Word and Google Docs** (upload to Drive and open with Google Docs) and check:

- [ ] Cover and back cover: navy from edge to edge, the whole S visible, the logo not cut off.
- [ ] Cover: the title and date sit next to the `S|` as on the A4 version.
- [ ] Page 2 onwards: the header title and logo line up with the margins.
- [ ] Body text, lists, and the sample table fill the width between the margins.
