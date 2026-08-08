---
"@marko/runtime-tags": patch
---

Reading a loop parameter anywhere in a `<for by=...>` expression (e.g. `by=item.id`) is now a compile error with a code frame, instead of compiling clean and throwing a `ReferenceError` at first render.
