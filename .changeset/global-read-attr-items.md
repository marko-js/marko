---
"@marko/runtime-tags": patch
---

Fix a `$global` read used as one value of a class or style object (or a class array) whose other values change, which the client read as an undefined `$global` and threw on.
