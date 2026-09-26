---
"@marko/runtime-tags": patch
---

Stop re-parsing an unescaped placeholder's (`$!{}`) markup when it updates to equal markup, which lost focus, `<details>` state and element identity inside it, including on the first update after the page resumes.
