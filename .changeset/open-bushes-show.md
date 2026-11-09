---
"@marko/runtime-tags": patch
---

Assigning a destructured property in a handler (`count++`, `count += 1`, `count = …`) reads its value and calls its change handler through the object the handler reads it from, instead of a slot the server may not write (which gave `NaN` or threw).
