---
"@marko/translator-default": patch
"marko": patch
"@marko/compiler": patch
---

Use @internal module to host browser/worker remapped files. Improves support for some tools that don't work well with nested package.json files.
