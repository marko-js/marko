---
"@marko/runtime-tags": patch
---

Flatten a text-only conditional written with the `<else if=cond>` space syntax into a single placeholder ternary, matching the `<else-if=cond>` spelling — both now skip the `_if` runtime, branch scopes, and serialize guards.
