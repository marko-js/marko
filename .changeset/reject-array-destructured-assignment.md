---
"@marko/runtime-tags": patch
---

Report a compile error when code assigns a variable that comes from array destructuring, such as `x` in `<const/[x]=input.list>` or `key` in `<for|[key, value]| of=entries>`. An array has no change handler to receive the new value, so this used to compile into a server render that threw a `ReferenceError` and a client handler that threw when called. Assigning a variable destructured from an object, including an object inside an array, still calls that object's change handler.
