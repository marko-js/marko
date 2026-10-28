---
"@marko/runtime-tags": patch
---

Attaching an event handler no longer checks the element before delegating its event type, since delegation already registers each type once.
