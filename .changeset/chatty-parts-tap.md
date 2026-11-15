---
"@marko/runtime-tags": patch
---

A recursive `<define>` whose recursive call passes a param back (`depth=depth - 1`) now writes server data for that param only where its outer calls do, instead of guarding it at runtime in every render.
