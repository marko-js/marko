---
"@marko/runtime-tags": patch
---

In a Tags template compiled alongside Marko 5, `out["global"]` now reads `$global` like `out.global`, and `out[global]` (a variable named `global`) is now the "Only `out.global` is supported" compile error instead of silently reading `$global`.
