---
"marko": patch
"@marko/runtime-tags": patch
---

Fix import analysis crashing on `ImportDeclaration` nodes that have no `attributes` array, such as imports inserted by babel plugins or taglib transformers using the `@babel/types` builders (which omit the array).
