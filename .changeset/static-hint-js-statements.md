---
"@marko/runtime-tags": patch
---

Suggest `static` when a module level JavaScript statement (`function`, `class`, `type`, `interface`, `enum`, `async function`, `declare`) parses as an unknown tag, instead of a misleading nearest-tag guess like ``Did you mean `<section>`?``.
