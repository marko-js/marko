---
"@marko/runtime-tags": patch
---

Fix client code that read a property of a property of a `<for>` loop key through an alias, such as `${k.constructor.name}` after `<const/k=key/>`: it read a scope value that does not exist and threw.
