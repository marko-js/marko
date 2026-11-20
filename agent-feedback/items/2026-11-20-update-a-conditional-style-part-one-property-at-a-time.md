---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › addDelimitedAttrItem
---

# Update a conditional style part one property at a time

A `style` part that is `cond && { … }`, `cond && "…"` or `cond ? a : b` makes the whole value rewrite through `_attr_style` on every change, though a property may appear only once across a `style` value, so each property such a part sets has no other writer. `class` already turns `on && "x"` and `c ? a : b` into toggles. Direction: read a conditional part's literal object (or declaration string) branches into one style item per property, valued `cond ? value : null` per branch, so `style=["display:block", isError && { color: "red" }]` (the docs' own example) keeps `display:block` in the template and updates only `color`.

Check: `pnpm run compile -- -o dom -d` on `<div style=["display:block", input.err && { color: "red" }]/>` emits `_attr_style` with the whole array.
