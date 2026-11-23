---
"@marko/runtime-tags": patch
---

A `<let>` `valueChange=` that is certainly not a function, such as an array or object literal, a string built from input or a number, is now a compile error, as a literal constant already was. A value only known at run time that is not a function now throws a debug error naming `valueChange` when the `<let>` is assigned, instead of `scope[valueChangeAccessor] is not a function`.
