---
"marko": patch
---

Stop holding on to server rendered components whose DOM is already gone (such as a replaced `<await client-reorder>` placeholder's) once the document has loaded, instead of queueing them for a `DOMContentLoaded` that never fires again.
