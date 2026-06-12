---
"@marko/runtime-tags": patch
---

Fix derived value intersections updating in a non-deterministic order, which could render a stale downstream derived value after an update.
