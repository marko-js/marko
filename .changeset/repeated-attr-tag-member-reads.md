---
"@marko/runtime-tags": patch
---

Fix a child tag that reads members of a repeated attribute tag, such as `input.item.foo` with two `<@item>` tags, showing the last `<@item>` in the browser instead of the first, and a `Cannot read properties of undefined` error on the first update after resume. A later `<@item>` that nests an attribute tag in `<if>` or `<for>` no longer throws a `ReferenceError` in the browser.
