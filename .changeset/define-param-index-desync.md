---
"@marko/runtime-tags": patch
---

Fix a client-side `ReferenceError` and lost reactivity when a locally-invoked `<define>` has an unused non-final positional parameter. The compiler's argument analysis advanced its positional index only for used parameters, so an unused earlier parameter desynced every following argument, dropping its reference while the DOM output still emitted a per-parameter signal call for it, producing a bare undeclared identifier at init. Server rendering was unaffected, so the mismatch surfaced only on the client.
