# Sngular Apps

Priority 3. Same system as the web, adapted to touch screens.

- **App icon:** positive `S|` isotype on white or negative on navy. No text.
- **Light theme.** The top bar can be navy with `ink-inverse`.
- **Typography:** `ui-body` (16/24) for body text, `ui-label` (16/24 SemiBold) for buttons and tabs, `ui-caption` (13/18) for hints. On screen titles, `heading-1` scaled to 28–32px.
- **Bottom navigation:** 3–5 destinations with a 24px Outlined icon + label; the active one in `accent`.
- **Controls:** `Button` (48px tall), `Input` (48px, visible label), and touch targets of at least 44×44px. No rounding, except checkboxes (`radius-xs`) and avatars (`radius-full`).
- **States:** focus with a `focus` ring, error with a `danger` border + icon + text in `ink`, and confirmation in `success`.
- **Brand gesture:** at most one per screen. For example, a `Highlight` in the onboarding headline or the cursor next to a detail image.
- **Data:** for charts, use `navy`, `blue`, and `navy-light` first; then the `chart-*` palette, always with labels.
