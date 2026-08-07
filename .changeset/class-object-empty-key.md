---
"@marko/runtime-tags": patch
---

An empty key in a class object (`class={ "": cond }`) no longer throws on client render; it is dropped, matching server rendering.
