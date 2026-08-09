---
"@marko/runtime-tags": patch
---

Emit a custom tag's HTML render call after its attribute tag statements, fixing a ReferenceError when a tag with a tag variable collects attribute tags under control flow.
