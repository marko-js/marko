---
"@marko/runtime-tags": patch
---

Fix `<textarea value=x>body</textarea>` silently dropping the author's `value` attribute (the body was appended as a second, last-wins `value`). Combining both is now a compile error.
