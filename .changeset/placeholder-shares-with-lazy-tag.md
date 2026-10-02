---
"@marko/runtime-tags": patch
---

Fix `Unable to serialize a value shared between independently lazy loaded content` when a `@placeholder` shares a value with a lazily loaded tag in it or before it. The placeholder's data now serializes first, and the lazy tag reads the value back from it.
