---
"@marko/runtime-tags": patch
---

Fix a `ReferenceError` during server rendering when a custom tag receives an attribute tag, or an `<if>`/`<for>` of attribute tags, that it never reads and that reads a value nothing else uses. Attribute tags a tag never reads are now left out of both the server and browser output, as is content it never reads, whether passed as the tag's body or inside an attribute tag, so values read only there are no longer kept or serialized for it.
