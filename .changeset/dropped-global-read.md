---
"@marko/runtime-tags": patch
---

Stop declaring `$global` in the server render when every `$global` read sits in a value the compiler drops, such as an attribute the child tag never reads, a repeated native attribute, or the `of=` of an empty `<for>`.
