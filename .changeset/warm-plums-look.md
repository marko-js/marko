---
"@marko/translator-default": patch
"@marko/compiler": patch
"marko": patch
---

Fix issue where element keys could be different because of hoisted const elements not always being keyed. This could cause a hydration issue since the server and client compilations would not agree on the keys.
