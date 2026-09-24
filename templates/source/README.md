# Template source

`Sngular_Document_Template.original.docx` is the brand team's original document template, exactly as they delivered it. Don't edit it.

The template people actually use is generated from it: `npm run templates` (needs Python 3 and Pillow: `pip install pillow`) applies the brand decisions listed in `skills/sngular-design/references/documents.md`, section 9, and writes:

- `skills/sngular-design/assets/templates/Sngular_Document_Template.docx`: the official A4 template the skill ships.
- `drafts/templates/Sngular_Document_Template_Letter.docx`: the US Letter version, in review.

If the brand team sends a new version, replace the original here, run `npm run templates`, then `npm run build`, and check the result in Word and Google Docs.
