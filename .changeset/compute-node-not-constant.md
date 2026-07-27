---
"@marko/compiler": patch
---

An object literal holding a method or accessor is no longer treated as a compile-time constant, a computed `__proto__` key stays an own property, and mixing a BigInt with a number no longer throws.
