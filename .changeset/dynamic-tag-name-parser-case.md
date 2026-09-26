---
"@marko/runtime-tags": patch
---

Warn in development when a string dynamic tag name is one the HTML parser names differently, such as `"BR"` or `"ClipPath"`, since the client would create a different element than the server rendered.
