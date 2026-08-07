---
"@marko/runtime-tags": patch
---

Reading `event.currentTarget` in a native tag event handler is now a type error whose message points at the handler's second parameter (the typed element), since event delegation makes `currentTarget` unusable at runtime.
