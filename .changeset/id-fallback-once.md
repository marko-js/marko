---
"@marko/runtime-tags": patch
---

Mint `<id>`'s fallback once per scope so a nullish `value=` no longer produces a new id on every update.
