---
"@marko/runtime-tags": patch
---

Support serializing functions imported from another template. A template that exports a function now reserves a register id for it, and templates that import it share a single generated module that registers it.
