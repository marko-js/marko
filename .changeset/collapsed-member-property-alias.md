---
"@marko/runtime-tags": patch
---

A derived `<const>` whose property is read elsewhere (`xs.length`) is no longer inlined into a collapsed intersection, so the client runs the signal that feeds that property instead of leaving dependent values `undefined`.
