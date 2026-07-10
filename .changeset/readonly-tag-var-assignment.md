---
"@marko/runtime-tags": patch
---

Fix assignments to `<id>` and `<define>` tag variables compiling to silent no-ops (the assignment was replaced with its bare right-hand side). They now report the same "readonly and cannot be mutated" compile error as `<const>`.
