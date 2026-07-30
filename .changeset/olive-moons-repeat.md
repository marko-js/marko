---
"@marko/runtime-tags": patch
---

Move nodes directly into a detached parent instead of staging them in a `DocumentFragment`, speeding up building and tearing down keyed lists.
