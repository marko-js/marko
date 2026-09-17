---
"@marko/runtime-tags": patch
---

A `<for>` parameter beyond what its iteration form provides (`|item, index|` for `of=`, `|key, value|` for `in=`, one value for `to=`/`until=`) is a compile error instead of silently `undefined`.
