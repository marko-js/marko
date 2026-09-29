---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › trackAssignment
---

# Reject assigning a destructured rest element

A rest element of a destructured tag variable or tag parameter (`<const/{ a, ...rest }=input.obj>` or `<const/[a, ...rest]=input.list>`) has no `property`, so `trackAssignment` creates no change binding for it and an assignment such as `rest = {}` in a handler compiles to the bare value (`/* rest */{};`) with no error. No object carries a change handler for "every other property", so this should be a compile error in `trackAssignment`, in the style of the array destructuring error there.

Check: compile `<const/{ a, ...rest }=input.obj/>` and `<button onClick() { rest = {} }>${a}${rest.b}</button>` with `pnpm run compile -- -o dom -d` and read the click handler.
