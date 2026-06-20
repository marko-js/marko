---
"@marko/compiler": patch
---

Avoid an extra full program `scope.crawl()` after parsing each file. Babel
initializes scope bindings lazily when they are first accessed during the
later compile traversals, so the eager crawl was redundant work performed for
every compiled file. This speeds up multi-file compilations with no change to
the generated output.
