---
"@marko/runtime-tags": patch
---

Report a repeated `value=` attribute on a core tag (`<let>`, `<return>`, `<script>`, `<const>`, `<if>`, …), or a repeated `valueChange=` on `<let>` or `<return>`, with one error that names the tag and links its docs, in place of `Invalid duplicate value attribute.` or an error calling the attribute unsupported.
