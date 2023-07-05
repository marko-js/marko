---
"@marko/compiler": patch
"marko": patch
"@marko/translator-default": patch
---

Fix regression which would happen if tools tried to "delete" the `loc` property on error instances returned from Marko. This property is now configurable and can be deleted again.
