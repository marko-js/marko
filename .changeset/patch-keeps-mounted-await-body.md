---
"@marko/runtime-tags": patch
---

A patch whose `<await>` is still pending keeps a mounted `<try>` body in place until the resolved body lands, instead of parking it behind the placeholder (or, for a bare `<await>`, removing its body). The pending UI now shows only for a boundary with nothing else to show: one the flush creates, or one already parked behind its placeholder or catch.
