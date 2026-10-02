---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › createBindingsAndTrackReferences
---

# Take a whole-array rest as a new array, not an alias

An array rest at index 0 (`[...chars]`) gets no `excludeProperties` and no `restOffset`, so it is made a direct alias of the value it rests, and reads of it go through that value. Destructuring copies any iterable into a new array, so for a string `<const/{ text }=input/><const/[...chars]=text/><div>${chars.join("-")}</div>` the DOM output reads `text.join("-")` and throws, and HTML does the same when the rest is declared in another section (one in its own section is declared as written). Record it as a rest that excludes nothing (`restOffset: 0`), and have the checks that tell an array rest by a truthy `restOffset` (in `trackReference`, `getRestPattern`, `withRestFallback`, `getDeclaredBindingExpression`) test `restOffset !== undefined`, so both outputs build the array.

Check: `pnpm run compile -- -o dom -d` on that template emits `text.join("-")`; with the rest inside `<if=true>`, `-o html -d` emits `input.text.join("-")`.
