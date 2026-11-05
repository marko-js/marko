---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

Update dependencies: the bundled Babel to 7.29.12, `htmljs-parser` 5.20, `@luxass/strip-json-comments` 2.0.2 and the bundled `entities` 9 in the compiler, `minimatch` 11 in `markoc`, and `magic-string` 1. `magic-string` 1 ships only ESM, so `engines.node` rises to `>=22.12.0`, the first Node 22 release that can `require()` it.
