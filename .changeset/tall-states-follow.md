---
"@marko/compiler": patch
---

Set Babel's Marko plugin up once instead of once per set of compile options, so compiles whose options are new objects each time (a new `babelConfig`, `fileSystem` or `resolveVirtualDependency` per file) no longer set it up again for every template. An unset `optimize` now follows `NODE_ENV`/`MARKO_DEBUG` on every compile; compiles that shared their options and cache kept the first compile's value.
