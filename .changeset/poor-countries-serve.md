---
"marko": patch
---

Fix regression where an out of order await resolves before the "<await-reorderer>" (automatically injected at the end of the body) would be flushed. In practice this means an in order await after all out of order awaits (that resolves after any of the out of order awaits) was causing some out of order awaits not to be reordered.
