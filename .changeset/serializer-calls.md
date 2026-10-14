---
"@marko/runtime-tags": patch
---

Write the server's deferred and queued serializer calls through one emitter with fewer allocations, and drop needless bytes from the payload: `new Set`/`new Map` for a collection whose members all defer, and no parentheses around a queued call's object unless its write assigns it.
