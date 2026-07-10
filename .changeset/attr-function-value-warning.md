---
"@marko/runtime-tags": patch
---

Fix the debug attribute-value assertion whitelisting any `on*`/`*Change`-named attribute, which let function values render as literal attribute source with no warning (e.g. a spread `{checked, valueChange}` on a plain input wrote `valueChange="(v) => ..."` into the DOM). Handlers the runtime actually consumes never reach the attribute writers, so any function value there now errors in debug, with a hint for unapplied change handlers.
