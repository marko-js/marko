---
"@marko/runtime-tags": patch
---

Attribute tag content whose only client code is a `<return>` of its `<for>` param no longer throws `Cannot set properties of undefined (setting 'returns')` as its module loads in a debug build.
