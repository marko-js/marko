---
"@marko/runtime-tags": patch
---

Normalize static native dynamic tag names (`<${"br"}/>`) before analysis so they use the same void-element, textarea, and text-only handling as direct native tags. Genuinely dynamic tag names and custom/core tag collisions retain their existing dynamic behavior.
