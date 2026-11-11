---
"@marko/runtime-tags": patch
"marko": patch
---

Document the core tags with a doc comment above their `Input` type, in place of the descriptions their taglibs dropped. Language servers that read these comments show them when a tag is hovered or completed, and strike through the replaced `<effect>`. Marko 5's `<await>` no longer declares its `@then`, `@catch` and `@placeholder` as nested tags, which only fed editor completions.
