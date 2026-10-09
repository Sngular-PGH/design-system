# Template source

`Sngular_Document_Template.original.docx` is the brand team's original document template, exactly as they delivered it. Don't edit it.

The template people actually use is generated from it: `npm run templates` (needs Python 3 and Pillow: `pip install pillow`) applies the brand decisions listed in `skills/sngular-design/references/documents.md`, section 9, and writes:

- `skills/sngular-design/assets/templates/Sngular_Document_Template.docx`: US Letter, the default (Sngular USA).
- `skills/sngular-design/assets/templates/Sngular_Document_Template_A4.docx`: A4, for clients outside the US.

Both are in US English (D13). `style_picker_en.png` is the English replacement for the Spanish style-picker screenshot in the original's quick guide.

If the brand team sends a new version, replace the original here, run `npm run templates`, then `npm run build`, and check the result in Word and Google Docs.
