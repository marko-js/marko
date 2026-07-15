---
"@marko/runtime-tags": patch
"marko": patch
---

Fix native tag attributes whose names collide with `Object.prototype` members (such as `toString`, `valueOf`, `hasOwnProperty`, or `constructor`) being silently dropped from the output or raising a spurious `is not a valid attribute` error.
