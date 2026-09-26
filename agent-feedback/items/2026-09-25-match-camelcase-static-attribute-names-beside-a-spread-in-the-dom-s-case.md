---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › getUsedAttrs
---

# Match camelCase static attribute names beside a spread in the case the DOM reports

`getUsedAttrs` builds a spread's `skip` object from the authored static attribute names, and `dom/dom.ts › _attrs_partial` removes every attribute whose `el.attributes[i].name` is in neither `skip` nor the spread. The HTML parser lowercases attribute names on HTML elements, so `<div ...rest tabIndex=0 readOnly>` has `tabindex`/`readonly` in the DOM but `{ tabIndex: 1, readOnly: 1 }` as its skip, and the client removes both on mount (and on the first spread update after resume) while SSR keeps them. Direction: key `skip` by the lowercased name on HTML-namespace native tags (SVG and MathML names keep their case), or reject camelCase static names on HTML elements at compile time, and add a fixture.

Check: fixture `<div ...input.rest tabIndex=0 readOnly>hi</div>` with `equivalent: false` and `steps: [{ rest: { id: "a" } }]`: `render-ssr.debug.md` shows `id="a" readonly="" tabindex="0"`, `render-csr.debug.md` shows only `id="a"`; `dom.bundle.debug.js` passes `{ tabIndex: 1, readOnly: 1 }` to `_attrs_partial`.
