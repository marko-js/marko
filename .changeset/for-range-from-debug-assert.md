---
"@marko/runtime-tags": patch
---

Debug builds now error when a `<for>` tag's `from` or `step` attribute is a non-number, instead of silently concatenating indices.
