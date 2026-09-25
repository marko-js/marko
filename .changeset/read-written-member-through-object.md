---
"@marko/runtime-tags": patch
---

Read a tag variable's members, and names destructured from it, through the object once the template writes into it (`live.open = true`, `live[key] = x`, `live.items[i].done = true`), so a closure, handler or effect sees the written value instead of a copy taken when the variable was assigned. The template still updates only when the variable is reassigned.
