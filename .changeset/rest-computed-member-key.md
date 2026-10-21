---
"@marko/runtime-tags": patch
---

Fix a false compile error for a `<const>` rest binding used as a computed member key on an assignment, such as `obj[rest] = 1`. The reference is only read as the key, so it no longer counts as assigning members of the rest element.
