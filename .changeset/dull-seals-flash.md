---
"@marko/translator-default": patch
"@marko/compiler": patch
"marko": patch
---

Fix issue where using the longhand nested attribute tag syntax in a marko.json with a `target-property` defined was not registering the alias as a known attribute, leading to compile errors.
