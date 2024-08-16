---
"@marko/babel-utils": patch
"@marko/compiler": patch
"marko": patch
"@marko/runtime-tags": patch
"@marko/translator-default": patch
"@marko/translator-interop-class-tags": patch
"@marko/translator-tags": patch
---

Optimize javascript parsing helpers to pass in start line / column information to babel rather than faking it with whitespace.

For large templates this can have a significant impact on parsing performance.
