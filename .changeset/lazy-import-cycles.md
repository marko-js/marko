---
"@marko/runtime-tags": patch
"marko": patch
---

A template loaded with the `load` import attribute renders where its import is part of a module cycle, including a template that loads itself: the server reads the template it loads as it renders, not when the importing module evaluates, where a cycle may not have evaluated it yet. A tag closing such a cycle no longer references the removed import on the client.
