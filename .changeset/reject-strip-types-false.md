---
"@marko/runtime-tags": patch
---

Compiling a Tags API template with `stripTypes: false` for any output but `source` and `migrate` (such as `html` or `dom`) is now a compile error. The translator relies on types being stripped, and with them kept it emitted TypeScript syntax in JavaScript output and misanalyzed expressions such as `x as number`.
