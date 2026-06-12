---
"@marko/runtime-tags": patch
---

Reduce serialized output size: serialize dates in epoch form, dedupe strings starting at 13 characters, skip the backing array binding for Map/Set values that can never be referenced again, and serialize self-yielding iterables (attr tags) with `yield this` instead of a deferred circular assignment.
