---
"@marko/runtime-tags": patch
---

Fix `<meta content=x>` failing to compile. `content` is a real html attribute on `<meta>`, so the check for a `content` attribute on a void tag now only rejects tags that do not declare one.
