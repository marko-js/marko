---
"@marko/translator-default": minor
"marko": minor
"@marko/compiler": minor
---

Allow repeated attribute tags without using a `marko.json` file. Attribute tag objects now also contain `Symbol.iterator` implementation to make the single case more easily forwarded to the `<for>` tag.
