---
"@marko/runtime-tags": patch
---

Encode static serialize reason groups as a numeric bitmask instead of an object literal, avoiding an allocation per custom tag instance during SSR.
