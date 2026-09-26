---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › trackDelimitedAttrObjectProperties
---

# Keep a class token or style property that is both static and dynamic out of the template

The item-wise class/style lowering writes static tokens and declarations into the client template and toggles each dynamic key with `_attr_class_item`/`_attr_style_item`, without checking whether a dynamic key also occurs statically. SSR applies union semantics over the whole value (`_attr_class`/`_attr_style`), so `class=["a", { a: input.x }]` with `x` false renders `class="a"` on the server and `class=""` on the client, and `style=["color:red", { color: input.c }]` with `c` undefined renders `color:red` versus no color. After resume, the first update of that key switches the server's result to the client's. Direction: when a key is both static and dynamic, leave it out of the template and write it only through the dynamic path with the static value as its fallback (or use the whole-value helper for that attribute), and add a fixture.

Check: fixture `<div class=["a", { a: input.x }] style=["color:red", { color: input.c }]>hi</div>` with `equivalent: false` and `steps: [{ x: false }]`: `render-ssr.debug.md` shows `class="a" style="color:red"`, `render-csr.debug.md` shows `class="" style=""`.
