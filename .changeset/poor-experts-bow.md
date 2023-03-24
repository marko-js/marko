---
"@marko/translator-default": patch
"marko": patch
"@marko/compiler": patch
---

Avoids using a package.json remap for the browser implementation of the \_preserve internal tag (used to implement `no-update` directives). This fixes an issue where in vite the module could not be loaded properly.
