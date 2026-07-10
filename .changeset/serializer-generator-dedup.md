---
"@marko/runtime-tags": patch
---

Fix values yielded/returned by a serialized sync generator registering for reference dedup at positions inside the generator's lazy body. Reusing such a value in the same flush resumed it as `undefined` (the binding assignment only ran if the generator was iterated), and reuse in a later flush emitted invalid JS that killed that flush's resume script. Values are now hoisted into eagerly evaluated arguments, matching the `Symbol.iterator` serialization strategy.
