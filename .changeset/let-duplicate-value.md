---
"@marko/runtime-tags": patch
---

Fix a duplicate `value` attribute on `<let>` (e.g. `<let/x=input.a value=input.b/>`) wiring reactivity to one attribute while generating code for the other, which threw a `ReferenceError` on the client. It is now a compile error, matching `<script>`.
