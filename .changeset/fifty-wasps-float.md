---
"@marko/runtime-tags": patch
---

Fix issue where if a lazy loaded chunk loaded before the entry chunk it could cause a runtime error around missing serializable functions. Defers lazy load chunk initialization until after the main entry chunk.
