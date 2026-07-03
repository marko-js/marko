---
"@marko/runtime-tags": patch
---

Simplify persisted serialization to render-global value classes: hole and
structural guards compile to a flat `_persisted_reason()` check (the
per-attribute reason-group machinery is removed), and serialized values are
gated by compile-time source class — state-sourced values serialize only for
normal resume (`_state_reason()`), request-derived values additionally
serialize in update renders (`_update_reason()`). Update payloads no longer
carry client-owned state defaults.
