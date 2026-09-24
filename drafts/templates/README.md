# Document template drafts — pending brand approval

These are **proposals**, not the official template. The skill keeps using the brand team's original (`skills/sngular-design/assets/templates/Sngular_Document_Template.docx`) until these are approved. This folder isn't included in the skill install.

| File | What it is |
|---|---|
| `Sngular_Document_Template.docx` | The original A4 template with the fixes below applied to the file itself |
| `Sngular_Document_Template_Letter.docx` | The same, on US Letter (8.5 × 11 in) for clients in the US and Canada |

Both are generated from the original with `python3 scripts/make_template_drafts.py skills/sngular-design/assets/templates/Sngular_Document_Template.docx drafts/templates`. Don't edit them by hand: change the script and regenerate.

## What changes compared to the original

| # | Change | Original | Draft |
|---|---|---|---|
| D1 | Blue | `#0085FF` in Heading 5, table headers, the cover cursor, the logos, and the guide's swatches | `#0070F6` everywhere, the value in the Design System tokens and the official SVG logos |
| D3 | Table first column | `blue` text, fails AA on `navy-light` rows | `navy` Bold |
| D7 | Normal size | Not set (relies on Word's default) | 10 pt, set explicitly |
| D8 | Margins | 2.54 cm margins, pulled in with negative indents and decimal values that aren't valid OOXML | Real 1.8 cm side margins, no negative indents, whole-number values. Text stays where it was on the left; body text now also reaches 1.8 cm on the right (it stopped at 2.54 cm before) |
| D9 | Cover spacer | 27 empty Heading 1 paragraphs (show up in the navigation pane and table of contents) | A single page break |
| D11 | Letter size (Letter file only) | A4 only | 21.59 × 27.94 cm. The cover and back cover art is scaled to the page width and 2.6 cm is cropped from the top, so the logo keeps its bottom margin |

Not changed: the Spanish usage guide and sample content, the Subtitle style (D4), Heading 5 for links and table headers (D2), italic quotes (D5), the footer (D6), and the back cover tagline (D10). Those wait for the brand team's decisions.

## How to review

Open both files in **Word and Google Docs** (upload to Drive and open with Google Docs) and check:

- [ ] Cover: title and date sit next to the `S|` as in the original; the S outline and the blue edge look right.
- [ ] Letter cover and back cover: the top crop of the S is acceptable, and the logo isn't cut off.
- [ ] Page 2 onwards: the header title and logo line up with the 1.8 cm margins.
- [ ] Body text, lists, and the sample table fill the width between the margins.
- [ ] The navigation pane shows no empty headings before the guide.

The raster artwork was recolored pixel by pixel; if the brand team has the source artwork, exporting it again in `#0070F6` gives cleaner anti-aliased edges.
