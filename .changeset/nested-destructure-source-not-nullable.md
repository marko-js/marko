---
"@marko/runtime-tags": patch
---

Stop guarding reads that can never be nullish with optional chaining in the browser output: a value destructured only through a nested pattern, such as `<const/{ a: { b } }=obj/>`, since destructuring already throws when it is nullish, and a tag's params, which are always an array.
