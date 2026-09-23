# Web and apps

How to carry the brand into websites (priority 2) and apps (priority 3). The reference is sngular.com.

## Principles

- **Light theme** by default (`surface` white). Dark areas (hero, stat bands, footer) use `surface-inverse` (navy) with `ink-inverse`.
- **Square:** `radius-none` on buttons, cards, images, and fields.
- **Blue with purpose:** `accent` for the primary action, links, cursor, and highlight. A single `primary` button per view.
- **Typography:** on desktop, the brand styles (`display-*`, `heading-*`, `paragraph`); on mobile, `ui-*` for body and controls, and headings scaled down (heading-1 → 32px, heading-2 → 24px).
- **Icons:** Material Symbols Outlined at 24px.

## Page patterns (sngular.com)

- **Header:** positive logotype on the left (≥ 36px tall), navigation in `ui-label`, ES/EN switcher, and a "Contact" button.
- **Hero:** bleeding photo with a `display-1` or `display-2` title; the claim stands out with `Highlight` or `SpecialTitle`; primary button.
- **Stats:** `Stat` in a row (+1,300 People, +500 Clients, +900 Projects…) over `surface-alt` or navy.
- **Services:** cards with a rectangular image, `heading-3`, paragraph, and a link with the `arrow_forward` icon.
- **Success stories and Insights:** cards with an overline (sector or date), title, and "Know more".
- **Contact form:** `Input` fields with a visible label, primary button.
- **Footer:** navy background, negative logotype, links in white `ui-caption`.

## Components

This system's components (`window.Sngular`) are designed for web and apps: `Logo`, `Cursor`, `CursorText`, `Highlight`, `SpecialTitle`, `BigS`, `Overline`, `Button`, `Icon`, `Input`, `Stat`, and `Card`. Interactive states (hover, focus, disabled) are defined in `bundle.css`.

## Apps

- App icon: positive `S|` isotype on white or negative on navy (iOS and Android).
- Bottom navigation bar with 24px Outlined icons + label; active state in `accent`.
- Minimum touch target of 44×44px.
