---
"@marko/runtime-tags": patch
---

Derive keyed `<for of>` branch keys from the serialized list instead of serializing one key per branch: when the list is a plain read of a binding that always serializes, resume stores a single (identity-deduped) list reference and the client reconstructs branch keys with its compiled `by` on first update.
