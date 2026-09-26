---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/dom.ts › _attr
---

# Set dynamic `xlink:*`/`xml:*` attributes in their namespace on the client

The DOM runtime writes every attribute with `setAttribute`, which on a fresh element creates a null-namespace attribute literally named `xlink:href`, while the HTML parser (SSR output and static template attributes) puts `xlink:*`/`xml:*` attributes in the XLink/XML namespaces. Browsers resolve `<use>`, `<image>` and gradient references only through the namespaced attribute (or SVG 2 `href`), so `<svg><use xlink:href=`#${input.id}`/></svg>` renders nothing when the client creates it. Direction: have the translator lower dynamic `xlink:`/`xml:`-prefixed native attributes to a namespaced setter (`setAttributeNS`) so other attributes pay no bytes, and warn under MARKO_DEBUG for such keys in spreads.

Check: fixture `<svg><use xlink:href=`#${input.id}`/></svg>` with `equivalent: false` and steps `[{ id: "a" }, (c) => { const u = c.querySelector("use"); u.setAttribute("data-ns", String(u.attributes[0].namespaceURI)) }]`: `render-ssr.debug.md` shows `data-ns="http://www.w3.org/1999/xlink"`, `render-csr.debug.md` shows `data-ns="null"`.
