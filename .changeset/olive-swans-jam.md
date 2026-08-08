---
"@marko/runtime-tags": patch
"marko": patch
---

Resume a Class-API parent's inline function props on a Tags-API child, including ones nested in an object or array and ones passed by a split parent. They previously serialized as a noop, so a split parent's handler never fired and the rest only worked once the parent rerendered.
