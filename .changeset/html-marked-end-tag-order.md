---
"@marko/runtime-tags": patch
---

Keep `</html>` in document order when the tag carries a resume marker (e.g. `<html lang=input.lang>` on a stateful page), instead of emitting it before the resume scripts.
