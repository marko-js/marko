---
"@marko/runtime-tags": patch
---

Fix a partially-consumed sync generator resuming as an async generator, which broke client-side `for..of`/spread over the resumed value (no `Symbol.iterator`).
