---
"@marko/runtime-tags": patch
---

A `<define>` whose body renders its own template no longer throws "Cannot access '$walks' before initialization" when the module loads. A `<define>` that renders itself, or its template, outside a branch is now a compile error instead of a module that throws or a compiler stack overflow.
