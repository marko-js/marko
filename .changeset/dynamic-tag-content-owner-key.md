---
"@marko/runtime-tags": patch
---

Re-render a dynamic tag when it switches between two instances of the same content, which previously kept rendering the first instance's state because every instance of a content section shares one renderer id.
