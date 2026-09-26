---
"@marko/compiler": patch
---

`getRuntimeEntryFiles` now follows the `optimize` option set through `configure()`, falling back to `MARKO_DEBUG`/`NODE_ENV` only when it is unset, as compiles do. A host that configures `optimize` without matching environment variables no longer pre-bundles a different runtime (`@marko/runtime-tags/dom` versus `@marko/runtime-tags/debug/dom`) than its templates import.
