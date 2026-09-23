---
"@marko/compiler": patch
---

`CompileResult` now follows the options passed to `compile*`: `ast` and `map` are `null` unless `ast: true` / `sourceMaps` are set, and `code` is `null` with `code: false`. Code that reads `ast` or `map` may need a null check. `TagDefinition` and `AttributeDefinition` mark fields that real definitions can omit as optional, declare `setFlag`, and `parseTypeArgs` / `parseTypeParams` are now declared.
