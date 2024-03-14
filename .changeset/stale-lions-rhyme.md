---
"@marko/translator-default": patch
"@marko/translator-interop-class-tags": patch
"@marko/translator-tags": patch
"marko": patch
---

Fix regression where hydrate dependencies had the incorrect resolved path if they were in node_modules.
