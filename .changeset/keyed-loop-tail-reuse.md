---
"@marko/runtime-tags": patch
---

Keyed `<for>` over an array now reuses the unchanged tail before building a key map, so removing or inserting rows in the middle only maps the changed gap.
