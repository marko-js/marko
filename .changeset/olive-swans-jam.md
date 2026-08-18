---
"@marko/runtime-tags": patch
"marko": patch
---

Resume a Class-API parent's direct inline event handlers on a Tags-API child, including under a split parent. They previously serialized as a noop, so a split parent's handler never fired and the rest only worked once the parent rerendered.
