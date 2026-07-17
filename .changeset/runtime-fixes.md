---
"@marko/runtime-tags": patch
---

Reject buffered server renders whose final `consume` aborts the boundary,
instead of resolving with HTML from the aborted, reset boundary state.
