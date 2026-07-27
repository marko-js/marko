---
"@marko/compiler": patch
---

Fix `compileFile` and `compileFileSync` throwing a `TypeError` when called without a config, instead of falling back to the configured file system.
