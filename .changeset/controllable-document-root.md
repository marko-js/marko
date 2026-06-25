---
"marko": patch
"@marko/runtime-tags": patch
---

Resolve controlled radio-group siblings and the focused element against the `document` directly instead of the element's root node, removing the remaining `getRootNode()` lookups from the runtime.
