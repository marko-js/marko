---
"@marko/runtime-tags": patch
---

Serialize `$global`-derived content under the `persisted` compile option
without promoting `$global` reads to bindings. A `$global` member read
taints its owning expression request-derived (an expression-level flag, no
signals or value chains), so `$global`-derived holes emit resume markers
and join the serialized spine when `$global.persisted` is set at render
time — gated by the `_persisted_reason()` runtime guard that reads the
render flag directly. Client reads stay live member accesses on the global
object: update payloads always carry the `serializedGlobals` partial, the
applier assigns it onto the live `$global` before section merges dispatch,
and statements mixing client state with `$global` re-run against the live
scope through a registered per-section function in the `?persisted` entry
(invoked at the end of the section's compiled merge). Non-persisted builds
and renders remain byte-identical.
