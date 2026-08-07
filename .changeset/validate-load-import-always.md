---
"@marko/runtime-tags": patch
"marko": patch
---

Validate the `load` import attribute (trigger syntax and import specifiers) even when `linkAssets` is not configured, instead of silently falling back to an eager import.
