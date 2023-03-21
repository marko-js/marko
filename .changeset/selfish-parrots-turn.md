---
"@marko/compiler": patch
"marko": patch
"@marko/translator-default": patch
---

Avoid adding `export {}` (from "@babel/plugin-transform-typescript") when outputing a template with the types stripped.
