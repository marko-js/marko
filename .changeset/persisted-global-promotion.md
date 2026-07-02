---
"@marko/runtime-tags": patch
---

Promote `$global` member reads to param-like sources under the `persisted`
compile option: `$global`-derived holes now emit resume markers and join the
serialized spine when `$global.persisted` is set at render time, gated by a
new `_persisted_reason()` runtime guard that reads the render flag directly
(so cross-template `$global` reads gate correctly without parent threading).
Values are unaffected: client reads stay live member accesses on the global
object, `$global`-sourced props never serialize initially, and non-persisted
builds and renders remain byte-identical.
