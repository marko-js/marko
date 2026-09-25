---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/core/return.ts › analyze
---

# Read a returned value's members through it when a parent can write into it

A parent can write into the value a child returns (`<child/state/>` then `state.open = true`), but the child compiles its own member reads of that value to property aliases taken when it assigned the value, so a click handler in the child still logs `false` after the parent's write. Templates compile separately, so the child cannot learn that a parent writes: it would have to treat a `<return>` value as written into (the returned binding in `getWrittenValues`), costing those aliases in every returning template, or the docs should say a returned object is read-only to its parent.

Check: `pnpm run compile -- -o dom -d` on `tags/child.marko` `<const/state={ open: false }><button onClick() { console.log(state.open); }>child</button><return=state>` shows `console.log($scope.state_open)`.
