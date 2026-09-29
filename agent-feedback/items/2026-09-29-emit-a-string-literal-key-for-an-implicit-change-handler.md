---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/translate-var.ts › translateVar
---

# Emit a string literal key for an implicit change handler whose name is no identifier

Assigning a variable destructured with a string literal key (`<const/{ "my-key": x }=input.obj>` then `x = 2` in a handler) makes `translateVar` add the implicit change handler to the HTML destructure as `t.identifier(changeName)`, which prints `my-keyChange: $mykeyChange`, a syntax error in the server output (the DOM output reads `input["my-keyChange"]` correctly). Build the key with `toPropertyName`, already imported there. `trackAssignment` only lets object property values reach this branch, so the `getDestructurePattern` ancestor walk and its `if (pattern)` guard can also become the property's own pattern.

Check: compile that template with `pnpm run compile -- -o html` and read the `const { my-keyChange: … }` destructure.
