---
"@marko/runtime-tags": patch
---

Type stub fixes for editors and `@marko/type-check`: valueless `<let/x/>` type-checks, `<html-comment>`/`<html-script>`/`<html-style>` tag variables type as element getters, and `<try>`'s `@catch` parameter is `any` so reading `err.message` is clean.
