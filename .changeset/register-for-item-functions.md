---
"@marko/runtime-tags": patch
---

Fix functions that a `<for of>` or `<for in>` passes to its body, such as event handlers, not reaching the browser. Debug builds threw `Unable to serialize`, and production builds dropped them.
