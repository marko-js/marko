---
"@marko/runtime-tags": minor
---

`<try>` now requires its `<@catch>` and `<@placeholder>` to be written directly inside it, once each, with only content. Placing either inside control flow such as `<if>` or `<for>`, repeating it, or giving it attributes is now a compile error that says how to fix it. A `<try>` with neither is also a compile error, since it had no effect.
