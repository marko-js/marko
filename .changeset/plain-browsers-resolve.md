---
"@marko/compiler": patch
---

Depend on `resolve-sync` instead of bundling it, so a browser bundle of the compiler gets its browser defaults instead of Node-only code that threw `process is not defined` when loaded.
