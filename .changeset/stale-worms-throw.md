---
"@marko/compiler": patch
---

The bundled Babel keeps a path's child paths on the path, as Babel 8 does, so finding one is a property read rather than a lookup by its parent node.
