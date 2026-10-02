---
"@marko/runtime-tags": patch
---

An `<if>`, `<for>` or `<show>` whose only siblings are components that render nothing is addressed by its element, without a marker of its own, as it already was beside a `<let>` or the rest of an `<if>` chain.
