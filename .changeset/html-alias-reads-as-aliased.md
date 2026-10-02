---
"@marko/runtime-tags": patch
---

Stop the server output from declaring a `<const>` that aliases another value, or the parts destructured from one: each read is written as what it reads. A pattern holding a rest is still declared as written, since the rest needs it. In the browser output, an expression that reads both a value and its properties keeps its own optional chaining, rather than guarding only the first property.
