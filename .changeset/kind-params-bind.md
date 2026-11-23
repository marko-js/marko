---
"@marko/runtime-tags": patch
---

Assigning a destructured tag parameter (`<define/Tag|{ value }|>` given `value:=count`, or `<for|{ value }|>`) no longer makes the server render throw a `ReferenceError` for its change handler.
