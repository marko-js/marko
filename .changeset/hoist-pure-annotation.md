---
"@marko/runtime-tags": patch
---

Mark `_hoist` calls in compiled DOM output as `@__PURE__` so unused hoisted tag variable getters can be removed by bundlers.
