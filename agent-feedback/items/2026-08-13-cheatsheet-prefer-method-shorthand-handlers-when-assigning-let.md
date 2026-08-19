---
type: unclear
impact: med
effort: low
site: packages/runtime-tags/cheatsheet.md › Golden rules §6 Events
---

# Cheatsheet: prefer method-shorthand handlers when assigning `<let>` state

`onKeyDown((e) => { paletteOpen = !paletteOpen })` type-checks as TS2588 ("Cannot assign to 'paletteOpen' because it is a constant") under `mtc`, while the method form `onKeyDown(e) { paletteOpen = !paletteOpen }` is fine. Rule 6 already lists both shapes but does not warn that arrow/function values can freeze tag state bindings for writes. Apps converting `window.addEventListener` to Marko `on*` hit this immediately. Direction: one line under rule 6 — prefer method shorthand when the body assigns `<let>`/`:=` state; use `onX=cond && handler` only when the handler is a predeclared `<const>` or a no-assign filter.

Check: compile a tag with `<let/open=false>` and both handler forms; only the arrow form should error on `open = true`.
