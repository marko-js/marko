---
"@marko/runtime-tags": patch
---

Link `<for>` branch owners from the parent's serialized branch list instead of serializing `_` per iteration: the list serializes through an owner-assigning wrapper (`_.o`), and the per-branch owner prop is elided when markers are statically off, or guarded by the marker condition when it is runtime-dependent.
