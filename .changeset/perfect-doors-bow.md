---
"@marko/translator-default": patch
"@marko/compiler": patch
"marko": patch
---

Fix issue where the `ignoreUnrecognizedTags` compiler option was incorrectly escaping attribute tags for recognized tags that did not explicitly define their attribute tags in a marko.json
