---
"@marko/runtime-tags": patch
---

Fix serializing a `RegExp` whose source contains `<`: a named group or lookbehind previously shipped as invalid regexp syntax (`/(?\x3Cname>a)/`), which threw a `SyntaxError` while parsing the resume script and broke hydration entirely. Sources containing `<` now serialize through the `RegExp` constructor and round-trip exactly.
