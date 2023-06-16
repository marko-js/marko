---
"@marko/compiler": patch
"marko": patch
"@marko/translator-default": patch
---

Fix issue where aggregate errors from the compiler were not exposing error objects (was exposing the raw diagnostics).
