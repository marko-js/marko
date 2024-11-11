---
"@marko/translator-default": patch
"@marko/translator-tags": patch
"@marko/babel-utils": patch
"@marko/compiler": patch
"marko": patch
"@marko/runtime-tags": patch
"@marko/translator-interop-class-tags": patch
---

Always use MarkoTagBody AST nodes for control flow (even with attribute tags). This fixes a regression with the @marko/tags-api-preview and is more accurate to what is actually happening, especially from a variable scoping perspective.
