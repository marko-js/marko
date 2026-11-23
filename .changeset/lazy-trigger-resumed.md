---
"@marko/runtime-tags": patch
---

A lazy tag or template the client renders after a resumed page's `load` trigger fired now loads without waiting for that trigger again, including while the module the trigger started is still loading.
