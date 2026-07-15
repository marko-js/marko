---
"marko": patch
---

Remove an unused internal translator module (`transform-body`). It duplicated the class translator's inline injection of `<init-components>`, `<await-reorderer>`, and `<_preferred-script-location>` into a document body, which runs in `tag/index.js`. Compiled output is unchanged.
