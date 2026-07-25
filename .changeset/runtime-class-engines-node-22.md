---
"marko": patch
---

Declare `engines.node: ">=22"`, matching `@marko/runtime-tags`. The previous `18 || 20 || >=22` range had already been unsatisfiable: this package takes a hard dependency on `@marko/runtime-tags`, which requires `>=22`, so no Node 18 or 20 install could resolve a working tree. Both versions are also past end-of-life.
