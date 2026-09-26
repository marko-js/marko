---
"@marko/runtime-tags": patch
---

Fix a `ReferenceError` during server rendering when a custom tag receives an attribute tag, or an `<if>`/`<for>` of attribute tags, that it never reads and that reads a value nothing else uses. Attribute tags a tag never reads are now left out of both the server and browser output, along with the content inside them.
