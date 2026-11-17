---
"marko": patch
---

A template's compile records the directory it looks in for its style and component files as a dependency, and `marko/node-require` checks what each compiler's templates read against disk once per tick.
