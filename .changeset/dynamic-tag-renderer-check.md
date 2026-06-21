---
"@marko/runtime-tags": patch
---

Error in development when a dynamic tag (`<${value}>`) receives a non-renderable value — a primitive, or an object without a valid `content` renderer. `MARKO_DEBUG`-only and stripped from production.
