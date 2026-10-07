---
"@marko/runtime-tags": patch
---

Resume a template imported with `load` when the server writes it to the resume data, such as a `<let>` holding it. The server no longer fails to serialize it, and an optimized page no longer removes the content of a dynamic tag rendering it when it updates.
