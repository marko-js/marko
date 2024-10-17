---
"marko": patch
---

Deprecated the Marko.RepeatableAttrTag type (which is now an alias of Marko.AttrTag). This type was overcomplicating things and leading people to incorrectly handle the single item case. Update docs to avoid recommending relying on the array case since this behavior changes in Marko 6 to always be a single (iterable) item.

Updates the `Marko.Input` type to handle changes to the `Marko.Body` type from `@marko/language-tools`.
