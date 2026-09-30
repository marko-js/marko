---
"@marko/runtime-tags": patch
---

Fix client rendering of a branch holding a Class API tag defined only by a `renderer`: the tag now keeps its marker, so the nodes after it are found where the walk stores them.
