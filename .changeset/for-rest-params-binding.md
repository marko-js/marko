---
"@marko/runtime-tags": patch
---

Fix `<for|...args|>` serializing its params under a generated name nothing declared, which threw a `ReferenceError` at render once a handler read `args`.
