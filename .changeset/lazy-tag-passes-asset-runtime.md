---
"@marko/runtime-tags": patch
"marko": patch
---

Resolve a lazily loaded tag's assets through the asset runtime its importing template passes, instead of one only a page entry of the same API sets. A Class API lazy tag no longer throws `assetFlush is not a function` on a Tags API page, and a Tags API lazy tag no longer renders nothing on a Class API page.
