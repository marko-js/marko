---
"@marko/runtime-tags": patch
---

Read a property that only handlers read through its object's scope slot when the server already writes that object, so the property no longer has a slot, client forward, or serialized value of its own.
