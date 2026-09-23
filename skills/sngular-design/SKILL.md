---
name: sngular-design
description: Designs presentations, websites, landing pages, app screens, and visual pieces with the Sngular brand, following the Sngular Design System (Navy/Blue colors, Outfit typography, cursor, S|, selected text, special titles) and the 2025 Brand Book. Use this skill ALWAYS when someone at Sngular asks for a deck, slides, a client proposal, a success story, an executive presentation, a website, a landing page, a mockup, an app, a post, or any piece with the Sngular brand, even if they don't say "brand" or "design system," and also when they ask to review whether something complies with the Sngular brand. Works in Spanish and English.
---

# Sngular Design

This skill turns any Sngular visual request into a piece that's faithful to the brand. The brand has few rules, but they're very recognizable: if they're followed, anyone (from a developer to the CEO) produces something that looks like it was made by the brand team. If they're ignored, you get "a generic blue template," which is exactly what we want to avoid.

## 1. Decide what's being made

| Request | Channel | Read next |
|---|---|---|
| deck, slides, presentation, proposal, pitch, success story, kick-off, webinar | Presentation (priority 1) | `references/presentations.md` |
| website, landing page, page, hero, newsletter, banner | Web (priority 2) | `references/web.md` |
| app, screen, flow, dashboard, prototype | App (priority 3) | `references/apps.md` |
| social media post, cover, poster, invitation | Visual piece | `references/presentations.md` (resources) + `references/web.md` (formats) |
| "check if this complies with the brand" | Review | the checklist in section 5 |

Always read `references/brand-foundations.md` (color, type, logo, resources, accessibility) and `references/voice-and-messaging.md` (tone, messages, and figures). Then, only the reference for the relevant channel.

## 2. Load the Design System

The source of truth is the **Sngular Design System**. Use it in this order:

1. **In claude.ai with the Artifact tool:** the published Design System is `https://claude.ai/artifact/EcM2J9oVHkk7ExgXXMwDVM`. If it's set as the organization's default, Slides and Designs use it automatically. If not, pass it explicitly as the design system when creating the piece. Read its `project/README.md` before choosing colors or typography. If the link doesn't respond, search the list of Design Systems for one titled "Sngular Design System".
2. **Without access to the artifact** (Claude Code, API, other environment): use this skill's files. `assets/tokens.json` and `assets/tokens.css` have all the values, `assets/logos/` has the 8 official SVGs, and `assets/fonts/` has Outfit.
3. **Never** invent a color, size, or logo that isn't in those sources. If something is missing, use the closest value from the system and say so in the delivery.

## 3. Build the piece

Follow the reference for the channel. The five decisions that matter most for the result are:

1. **Background and rhythm.** The primary palette covers 95% (`navy`, `navy-light`, `white`, `blue`). In a deck, alternate white content slides with dividers and impact slides in navy or blue.
2. **A single brand gesture per composition.** Choose one: a `SpecialTitle` (S| + blue box), a couple of `Highlight`s (selected text), a cursor next to the photo, or the giant S. Never all at once. That way the resource stands out.
3. **Brand typography at scale.** Outfit, with the system's styles (`display-1` 92/98, `heading-1` 48/52, `heading-2` 32/38 in blue, `paragraph` 20/30…). Titles always in a primary color.
4. **Safe area.** In 16:9, 96px on the sides and 144px top and bottom, on a 1920×1080 canvas. The title sits flush with the top margin. Only photos may bleed off the edge.
5. **Real content.** Use the messages and figures from `voice-and-messaging.md`, in the language of the request. Never use lorem ipsum in a delivery.

## 4. Delivery formats

- **Presentation:** Slides type with the Sngular Design System. If PowerPoint or Google Slides is explicitly requested, deliver .pptx: Google Slides imports it without issue.
- **Web, landing page, or mockup:** Design type with the Design System. If code is requested, HTML or React with `assets/tokens.css` and the component classes.
- **App:** screens in Design. In code, the system's tokens and components.
- Always in **light theme**. Dark areas are made with `surface-inverse` (navy), not a dark mode.

## 5. Checklist before delivering

Go through each point. If something fails, fix it before delivering; don't just flag it.

- [ ] Only colors from the system. Secondaries (`purple`, `green`, `red`) only in icons, lines, or details, never in titles, paragraphs, or boxes with text.
- [ ] All text in Outfit (or Verdana if the environment doesn't have it) with the system's styles. Titles in navy, white, or blue.
- [ ] AA contrast: `blue` as small text only on `white`, and no `green` text on a light background. You can check pairs with `python scripts/check_contrast.py 0070F6 F2F3F4`.
- [ ] Original logo, in the correct variant for the background and at its minimum size (36px in color, 24px solid). S| isotype top right on slides.
- [ ] At most one special title and one or two highlights per composition.
- [ ] Safe area respected, boxes aligned, no widows, no empty boxes.
- [ ] Real photos, with a limited color range, in a straight rectangle.
- [ ] Single, consistent language. Figures come from `voice-and-messaging.md`, and anything uncertain has been flagged for review.
- [ ] The slide footer carries "Copyright © Sngular. All rights reserved".

When delivering, say in one or two lines which brand resources you used and what assumptions you made (for example, a figure to confirm or a photo that needs replacing).
