---
"@marko/runtime-tags": patch
---

Read a property that only handlers read through its object's scope slot when an effect already has the server write that object, so the property no longer has a slot, client forward, or serialized value of its own.
