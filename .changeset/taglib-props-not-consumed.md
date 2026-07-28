---
"@marko/compiler": patch
---

Fix taglib attribute definitions being lost when a taglib is loaded a second time, which left `clearCaches()` (used by hot reload) with untyped attributes.
