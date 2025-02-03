---
"@marko/runtime-tags": patch
---

Fix issue where streams that had aborted but then finished were swallowing the abort error.
