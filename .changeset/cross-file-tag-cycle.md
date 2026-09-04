---
"@marko/runtime-tags": patch
---

Fix custom tags that form a cycle across files (`<cyc-a>` renders `<cyc-b>`, which renders `<cyc-a>`). The site that closes the cycle now renders through the dynamic tag runtime instead of composing the not-yet-analyzed child's template, which produced a `Cannot access '$template' before initialization` error in the client bundle.
