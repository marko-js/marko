---
"@marko/runtime-tags": patch
---

Type `class=` and `style=` values to accept `0`, which the runtime already skips like any falsy value, so `class=["a", count && "has-items"]`, `style=[count && { color: "red" }]` and `class={ active: count }` type-check when `count` is a number.
