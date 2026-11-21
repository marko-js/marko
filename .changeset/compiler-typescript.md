---
"@marko/compiler": patch
---

Port the compiler's remaining sources to TypeScript. Compiled output and published types are unchanged; `isNativeTag` now always returns a boolean, as its type declares.
