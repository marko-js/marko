---
"@marko/compiler": patch
"marko": patch
"@marko/runtime-tags": patch
---

Fix regression where explicitly passing in `undefined` for translator was not loading the default translator.
