---
"@marko/runtime-tags": patch
---

In development, warn when the same lazy asset is imported with different `load` triggers by multiple parents. The asset streams a single trigger script, so only the first-rendered parent's trigger takes effect; the warning surfaces this instead of it silently choosing behavior by render order.
