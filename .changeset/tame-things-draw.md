---
"@marko/runtime-tags": patch
---

An `<await>` body and a `<try>`'s `<@catch>` receive their one value directly instead of a params array, dropping a forwarding signal per template and an array per settle or catch.
