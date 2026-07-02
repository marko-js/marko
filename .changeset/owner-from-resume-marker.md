---
"@marko/runtime-tags": patch
---

Avoid serializing the owner scope reference for state driven `<if>` and `<for>` branches; the resume runtime now links branch owners from the markers it already processes.
