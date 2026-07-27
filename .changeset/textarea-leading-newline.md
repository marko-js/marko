---
"@marko/runtime-tags": patch
---

Keep a `<textarea>` value's leading newline through an SSR render. The HTML parser discards one newline directly after the start tag, so the first line of the value was silently dropped on the server while the client kept it.
