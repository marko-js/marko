---
"@marko/compiler": patch
"@marko/runtime-tags": patch
"marko": patch
---

When a migrator or transform builds a node without a source location, compile errors and diagnostics about it now mark the nearest part of the template that has one (the node's first located part, its attribute or its tag) instead of failing with "Cannot read properties of undefined", pointing at the start of the file, or pointing at an unrelated `await`.
