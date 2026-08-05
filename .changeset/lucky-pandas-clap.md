---
"@marko/runtime-tags": patch
---

Fix static attribute values being dropped after hydration when spread onto a native tag alongside stateful spread attributes. Sourceless bindings in an intersection are now serialized so their values resume correctly.
