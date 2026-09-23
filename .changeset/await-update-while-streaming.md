---
"@marko/runtime-tags": patch
---

Changing an `<await>` value while its server-rendered content is still streaming no longer throws, and the content shows the latest value once it arrives.
