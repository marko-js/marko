---
"@marko/runtime-tags": patch
---

Abort a render when independently lazy loaded content shares a typed array's buffer or a request or response's headers, as it already does for other shared values.
