"""Build draft Sngular document templates from the brand team's raw template.

Usage: python3 scripts/make_template_drafts.py <source.docx> <out_dir>   (needs Pillow)

Applies D1, D3, D7, D8, D9 to an A4 copy, and additionally D11 (US Letter) to a
second copy. The original file is never modified.
"""
import io, re, sys, zipfile
from PIL import Image

SRC, OUT_DIR = sys.argv[1], sys.argv[2]

OLD_BLUE, NEW_BLUE = "0085ff", "0070F6"
NAVY = "061B2B"
OLD_MARGIN, NEW_MARGIN = 1440, 1021          # twips: 2.54 cm -> 1.8 cm
SHIFT = OLD_MARGIN - NEW_MARGIN              # 419 twips
EMU_PER_TWIP = 635
A4 = (11909, 16834)
LETTER = (12240, 15840)


def fnum(v):
    return float(v)


def snap(v):
    v = round(v)
    return 0 if abs(v) <= 15 else v


# ---- D1: blue -------------------------------------------------------------
def fix_blue_xml(x):
    return re.sub(OLD_BLUE, NEW_BLUE, x, flags=re.I)


def recolor_png(data):
    """Move #0085FF (and its anti-aliased blends) to #0070F6."""
    im = Image.open(io.BytesIO(data)).convert("RGBA")
    old = (0x00, 0x85, 0xFF)
    new = (0x00, 0x70, 0xF6)
    px = im.load()
    changed = 0
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            # exact or near-exact brand blue
            if abs(r - old[0]) <= 6 and abs(g - old[1]) <= 6 and abs(b - old[2]) <= 6:
                px[x, y] = (*new, a)
                changed += 1
    if not changed:
        return data, 0
    buf = io.BytesIO()
    im.save(buf, "PNG", optimize=True)
    return buf.getvalue(), changed


# ---- D7: Normal 10 pt -----------------------------------------------------
def fix_normal_size(styles):
    m = re.search(r'(<w:style [^>]*w:styleId="Normal"[^>]*>)(.*?)(</w:style>)', styles, re.S)
    body = m.group(2)
    if "<w:sz " in body:
        return styles
    sz = '<w:sz w:val="20"/><w:szCs w:val="20"/>'
    if "<w:rPr>" in body:
        body = body.replace("<w:rPr>", "<w:rPr>" + sz, 1)
    else:
        body = body + "<w:rPr>" + sz + "</w:rPr>"
    return styles[: m.start(2)] + body + styles[m.end(2):]


# ---- D9: cover spacer -----------------------------------------------------
def fix_cover_spacer(doc):
    body_start = doc.index("<w:body>") + len("<w:body>")
    paras = list(re.finditer(r"<w:p[ >].*?</w:p>", doc[body_start:], re.S))
    n = 0
    for p in paras:
        t = p.group(0)
        if 'w:val="Heading1"' in t and not re.sub(r"<[^>]+>", "", t).strip() and "<w:drawing" not in t:
            n += 1
        else:
            break
    assert n >= 20, f"expected the empty Heading 1 cover spacer, found {n}"
    start = body_start + paras[0].start()
    end = body_start + paras[n - 1].end()
    brk = '<w:p><w:pPr><w:spacing w:after="0"/></w:pPr><w:r><w:br w:type="page"/></w:r></w:p>'
    return doc[:start] + brk + doc[end:], n


# ---- D3: table first column ------------------------------------------------
def fix_first_column(doc):
    def per_table(tm):
        tbl = tm.group(0)
        rows = list(re.finditer(r"<w:tr[ >].*?</w:tr>", tbl, re.S))
        out, last = [], 0
        for i, rm in enumerate(rows):
            out.append(tbl[last: rm.start()])
            row = rm.group(0)
            if i > 0:  # skip the header row
                cm = re.search(r"<w:tc>.*?</w:tc>", row, re.S)
                cell = cm.group(0)
                cell = re.sub(r'<w:color w:val="[0-9A-Fa-f]{6}"/>', f'<w:color w:val="{NAVY}"/>', cell)
                cell = re.sub(r"<w:rPr>(?!(?:(?!</w:rPr>).)*<w:b/>)", "<w:rPr><w:b/><w:bCs/>", cell, flags=re.S)
                row = row[: cm.start()] + cell + row[cm.end():]
            out.append(row)
            last = rm.end()
        out.append(tbl[last:])
        return "".join(out)

    return re.sub(r"<w:tbl>.*?</w:tbl>", per_table, doc, flags=re.S)


# ---- D8: margins -----------------------------------------------------------
def shift_indents(x, skip_tables):
    """Add SHIFT to left/right indents so text stays where it was, then round."""
    def fix_ind(m):
        tag = m.group(0)
        def adj(am):
            name, val = am.group(1), fnum(am.group(2))
            if name in ("left", "right", "start", "end"):
                val += SHIFT
            return f'w:{name}="{snap(val)}"'
        return re.sub(r'w:(left|right|start|end|hanging|firstLine)="(-?[\d.]+)"', adj, tag)

    def fix_region(s):
        s = re.sub(r"<w:ind [^>]*/>", fix_ind, s)
        s = re.sub(r'<w:tblInd w:w="(-?[\d.]+)"', lambda m: f'<w:tblInd w:w="{snap(fnum(m.group(1)) + SHIFT)}"', s)
        return s

    if not skip_tables:
        return fix_region(x)
    parts, last = [], 0
    for tm in re.finditer(r"<w:tbl>.*?</w:tbl>", x, re.S):
        parts.append(fix_region(x[last: tm.start()]))
        tbl = tm.group(0)
        tbl = re.sub(r'<w:tblInd w:w="(-?[\d.]+)"', lambda m: f'<w:tblInd w:w="{snap(fnum(m.group(1)) + SHIFT)}"', tbl)
        parts.append(tbl)  # cell indents are relative to the cell: leave them
        last = tm.end()
    parts.append(fix_region(x[last:]))
    return "".join(parts)


def shift_column_anchors(x):
    """Anchors positioned relative to the column move with the margin."""
    emu = SHIFT * EMU_PER_TWIP
    return re.sub(
        r'(<wp:positionH relativeFrom="column">\s*<wp:posOffset>)(-?\d+)(</wp:posOffset>)',
        lambda m: f"{m.group(1)}{int(m.group(2)) + emu}{m.group(3)}", x)


def round_decimals(x):
    return re.sub(r'(w:\w+)="(-?\d+\.\d+)"', lambda m: f'{m.group(1)}="{round(float(m.group(2)))}"', x)


def fix_page(doc, page):
    w, h = page
    doc = re.sub(r"<w:pgSz [^>]*/>", f'<w:pgSz w:w="{w}" w:h="{h}" w:orient="portrait"/>', doc)
    doc = re.sub(r"<w:pgMar [^>]*/>",
                 f'<w:pgMar w:top="1440" w:right="{NEW_MARGIN}" w:bottom="1440" w:left="{NEW_MARGIN}" '
                 f'w:header="567" w:footer="567" w:gutter="0"/>', doc)
    return doc


def fit_table(doc, page):
    text_w = page[0] - 2 * NEW_MARGIN

    def per_table(tm):
        tbl = tm.group(0)
        old_w = fnum(re.search(r'<w:tblW w:w="([\d.]+)"', tbl).group(1))
        k = text_w / old_w
        tbl = re.sub(r'<w:tblW w:w="[\d.]+"', f'<w:tblW w:w="{text_w}"', tbl)
        tbl = re.sub(r'<w:gridCol w:w="([\d.]+)"/>', lambda m: f'<w:gridCol w:w="{round(fnum(m.group(1)) * k)}"/>', tbl)
        tbl = re.sub(r'(<w:tcW w:w=")([\d.]+)(" w:type="dxa")', lambda m: f"{m.group(1)}{round(fnum(m.group(2)) * k)}{m.group(3)}", tbl)
        return tbl

    return re.sub(r"<w:tbl>.*?</w:tbl>", per_table, doc, flags=re.S)


# ---- D11: Letter -----------------------------------------------------------
def to_letter_fullbleed(x, cx_old, cy_old):
    """Scale full-page art to Letter width; crop the top so the logo keeps its bottom margin."""
    s = LETTER[0] * EMU_PER_TWIP / cx_old
    cx_new, cy_new = round(cx_old * s), round(cy_old * s)
    offset_v = round(LETTER[1] * EMU_PER_TWIP - s * A4[1] * EMU_PER_TWIP)
    x = x.replace(f'cx="{cx_old}" cy="{cy_old}"', f'cx="{cx_new}" cy="{cy_new}"')
    x = re.sub(r'(<wp:positionV relativeFrom="page">\s*<wp:posOffset>)0(</wp:posOffset>)',
               lambda m: f"{m.group(1)}{offset_v}{m.group(2)}", x)
    return x, s, offset_v


def to_letter_cover_text(x, s, offset_v):
    return re.sub(r'(<wp:positionV relativeFrom="paragraph">\s*<wp:posOffset>)(\d+)(</wp:posOffset>)',
                  lambda m: f"{m.group(1)}{round(int(m.group(2)) * s + offset_v)}{m.group(3)}", x)


def to_letter_header_logo(x):
    dx = (LETTER[0] - A4[0]) * EMU_PER_TWIP
    return re.sub(r'(<wp:positionH relativeFrom="page">\s*<wp:posOffset>)(\d+)(</wp:posOffset>)',
                  lambda m: f"{m.group(1)}{int(m.group(2)) + dx}{m.group(3)}", x)


# ---- build -----------------------------------------------------------------
def build(letter):
    zin = zipfile.ZipFile(SRC)
    parts = {n: zin.read(n) for n in zin.namelist()}
    log = []
    page = LETTER if letter else A4

    for n, data in list(parts.items()):
        if n.endswith(".png"):
            new, k = recolor_png(data)
            if k:
                parts[n] = new
                log.append(f"D1 {n}: {k} px recolored")
            continue
        if not n.endswith(".xml"):
            continue
        x = data.decode("utf-8")
        if n.startswith("word/"):
            x = fix_blue_xml(x)
        if n == "word/styles.xml":
            x = fix_normal_size(x)
            x = shift_indents(x, skip_tables=False)
        if n == "word/numbering.xml":
            x = shift_indents(x, skip_tables=False)
        if n == "word/document.xml":
            x, k = fix_cover_spacer(x)
            log.append(f"D9 removed {k} empty Heading 1 paragraphs")
            x = fix_first_column(x)
            x = shift_indents(x, skip_tables=True)
            x = shift_column_anchors(x)
            x = fix_page(x, page)
            x = fit_table(round_decimals(x), page)
            if letter:
                x, s, o = to_letter_fullbleed(x, 7560000, 10692000)
                log.append(f"D11 back cover art scaled x{s:.4f}, top cropped {-o / 360000:.2f} cm")
        if re.match(r"word/(header|footer)\d\.xml", n):
            x = shift_indents(x, skip_tables=True)
            x = shift_column_anchors(x)
            if letter and n == "word/header2.xml":
                x, s, o = to_letter_fullbleed(x, 7560000, 11025495)
                x = to_letter_cover_text(x, s, o)
                log.append(f"D11 cover art scaled x{s:.4f}, top cropped {-o / 360000:.2f} cm")
            if letter and n == "word/header1.xml":
                x = to_letter_header_logo(x)
        x = round_decimals(x)
        parts[n] = x.encode("utf-8")

    name = "Sngular_Document_Template_Letter.docx" if letter else "Sngular_Document_Template.docx"
    out = f"{OUT_DIR}/{name}"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for n in zin.namelist():  # keep the original part order ([Content_Types].xml etc.)
            z.writestr(zin.getinfo(n), parts[n])
    print(out)
    for l in log:
        print("  ", l)


build(letter=False)
build(letter=True)
