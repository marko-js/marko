---
"@marko/runtime-tags": patch
---

Fix issue where a let tag that depends on other values was incorrectly re-running when resumed from the server even without a change handler.
