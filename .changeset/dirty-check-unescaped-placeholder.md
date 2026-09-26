---
"@marko/runtime-tags": patch
---

Stop re-parsing an unescaped placeholder's (`$!{}`) markup when it updates to an equal string, which lost focus, `<details>` state and element identity inside it.
