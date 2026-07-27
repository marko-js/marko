---
"@marko/runtime-tags": patch
---

Report a compile error for a `content` attribute on a void or text-only native tag. `<input content=x>` and `<textarea content=x/>` previously compiled, emitting the content for the client and silently dropping it on the server, and neither could render it.
