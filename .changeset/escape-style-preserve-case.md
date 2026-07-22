---
"@marko/runtime-tags": patch
---

Preserve tag-name case when escaping `</style` inside `<style>` raw text, so an author-written `</STYLE>` in a `content:`/`url(...)`/custom-property value is no longer lowercased.
