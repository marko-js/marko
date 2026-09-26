---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/dom.ts › _attr_style_item
---

# Keep `!important` on a per-key dynamic style value in client renders

`_attr_style_item` writes `element.style.setProperty(name, value)`, and the CSSOM rejects a value that contains `!important` there (priority is a separate argument), so the declaration is silently dropped. The server writes the same value through `_attr_style` as `color:red !important`, so `style={ color: input.c }` with `c = "red !important"` diverges between SSR and a client render, and the first client update after resume removes the declaration. Direction: split a trailing `!important` into `setProperty`'s priority argument in `_attr_style_item` (check `build:sizes`), or, if the bytes are not worth it, warn under MARKO_DEBUG there and document that per-key style values carry no priority.

Check: fixture `<div style={ color: input.c }>hi</div>` with `equivalent: false` and `steps: [{ c: "red !important" }]`: `render-ssr.debug.md` shows `style="color:red !important"`, `render-csr.debug.md` shows the `<div>` with no style.
