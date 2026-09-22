---
"@marko/runtime-tags": patch
---

A section nested within content an attribute tag `<for>` creates (an `<if>`, `<for>`, dynamic tag body, or another tag's attribute tags inside `<@item>`) now receives the loop's params when rendered on the client, instead of rendering without them or throwing. The loop's params also keep their defaults, spreads and lazy reads there, and a static loop no longer resumes its content.
