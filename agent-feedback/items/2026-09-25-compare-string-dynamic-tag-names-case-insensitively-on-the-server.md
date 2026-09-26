---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/dynamic-tag.ts › _dynamic_tag
---

# Compare string dynamic tag names case-insensitively on the server

The page parser lowercases HTML tag names, but `_dynamic_tag` matches a string tag name case-sensitively against `voidElementsReg` and the `"textarea"`/`"select"` checks (as does the tag-name switch in `html/attrs.ts › _attrs`). So `<${"BR"}/>` writes `<BR></BR>`, which parses as two `<br>` elements, and `"TEXTAREA"`/`"SELECT"` skip their value handling. Nothing on the server flags such a name, so a page that only server renders it gets no diagnostic. Direction: make those server checks case-insensitive (SVG names never hit them), or add a MARKO_DEBUG warning in `_dynamic_tag` for a name that matches one only when lowercased.

Check: fixture `dynamic-tag-name-parser-case` (`void: "BR"`): `writes.debug.html` has `<BR></BR>` and `render-ssr.debug.md` shows two `<br>` elements, while `render-csr.debug.md` shows one.
