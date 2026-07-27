---
"@marko/runtime-tags": patch
---

Detect `<attrs>` and `<effect>` as Tags-API markers, so a template whose only Marko 6 signal is one of them is no longer translated as Class API, where the tag is not defined.
