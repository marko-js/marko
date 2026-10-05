---
"@marko/runtime-tags": patch
---

A toggled class may not repeat a name the rest of its `class` value writes: `class=["a", { a: on }]` is now a compile error, and a stylesheet module read that repeats one only while rendering throws in development. In exchange the client toggles single classes instead of rewriting the attribute: `class=["a", on && "b"]` and computed keys such as `{ [KEY]: on }` now toggle `b`, keeping `a` in the template.
