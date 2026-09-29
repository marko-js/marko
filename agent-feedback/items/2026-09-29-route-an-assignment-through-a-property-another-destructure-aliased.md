---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › createBinding
---

# Route an assignment through the change handler of a property another destructure already aliased

When two destructures read the same property (`<const/{ a }=input>` and `<const/{ a: b }=input>`), `createBinding` makes the second binding a direct alias of the first (`property` cleared, `aliasOf` set to the existing property binding). `trackAssignment` only creates a change binding when `binding.property` is set, so `b = 2` in a handler compiles to `/* input.a */2;` and never calls `input.aChange`, while the same assignment to `a` does. The assignment should resolve through the alias to the property binding it renames and use that binding's `Change` sibling.

Check: compile `<const/{ a }=input/>`, `<const/{ a: b }=input/>`, `<button onClick() { b = 2 }>${a}${b}</button>` with `pnpm run compile -- -o dom -d` and read the click handler.
