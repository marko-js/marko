---
"@marko/runtime-tags": patch
---

Stop retaining tags-to-class compat scopes for the life of the page. Every resumed scope carrying a class component id was registered in a lookup only the class-to-tags direction reads and deletes, so the other direction's scopes — and, after their first re-render, the attached component and its root nodes — were never released.
