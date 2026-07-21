---
"@marko/compiler": patch
---

Declare `magic-string` as a dependency — it is imported by the published `index.d.ts` but was previously only available via hoisting.
