---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › assertUniqueDelimitedNames
---

# Match style properties across a value as CSS does

`assertUniqueDelimitedNames` (and the server's `_attr_style` in development) allow a `style` property in only one part of a value, but compare names as exact strings, so a shorthand and its longhand, or two spellings of one property, pass the check and still diverge between server and client. The server writes the joined declarations, where the later one wins; the client keeps the static part in the template and updates the item alone with `_attr_style_item`. `style=[{ "margin-left": x }, "margin:0"]` renders `margin-left:0` on the server and `5px` once the client sets `x="5px"`; `style=["border:1px solid red", { "border-color": c }]` keeps a red border on the server for a nullish `c`, while the client's `setProperty("border-color", "")` removes the color the shorthand set; `style=["COLOR:blue", { color: c }]` passes the check though CSS property names other than custom properties are ASCII case-insensitive. Direction: compare names case-folded (except `--` custom properties) and treat a static shorthand and an item longhand, or the reverse, as the same property from a shorthand-to-longhand table, and reject them as one property.

Check: in Chromium and Firefox, `<div style="margin:0">` then `el.style.setProperty("margin-left", "5px")` computes `margin-left: 5px`, while `<div style="margin-left:5px;margin:0">` computes `0px`; `pnpm run compile -- -o dom -d` on `<div style=["COLOR:blue", { color: input.c }]/>` emits `_attr_style_item`.
