---
"@marko/compiler": patch
---

Fix compile errors surfacing as `TypeError: cyan is not a function` when the compiler is bundled for the browser, so the diagnostic renders instead.
