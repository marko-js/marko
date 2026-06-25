---
"marko": patch
"@marko/runtime-tags": patch
---

Always delegate native events from the `document` rather than each element's root node. This removes the `getRootNode()` lookup from the delegation path and shrinks the runtime.
