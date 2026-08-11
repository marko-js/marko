---
"@marko/compiler": minor
---

Support an `async` keyword before shorthand methods, eg `<button async onClick() { await save() }>` and the default attribute form `<my-tag async (event) { ... }>`. A shorthand method can no longer be named `async`.
