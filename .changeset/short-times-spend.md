---
"@marko/runtime-tags": patch
---

Read a property of a rest element as the rest's, not the object it came from, when the same handler also reads that object (an excluded property read the object's value instead of `undefined`).
