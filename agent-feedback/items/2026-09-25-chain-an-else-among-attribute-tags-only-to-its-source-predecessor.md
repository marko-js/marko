---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/if.ts › assertHasPrecedingCondition
---

# Chain an `<else>` among attribute tags only to the condition directly before it in source

The parser moves control-flow tags that hold attribute tags into the attribute-tag list and leaves other body content in the body, and `assertHasPrecedingCondition` checks only the previous sibling within that list. In `<child><if=input.a><@x v=1/></if><if=input.b>text</if><else><@x v=2/></else></child>` the `<else>` therefore chains to `<if=input.a>`: both outputs compile `if (input.a) … else …`, and the body's `<if=input.b>` silently loses its `<else>`. Direction: reject an `<else>` whose previous sibling in the list is not also its previous sibling in source (compare positions against the owner tag's body), and add an error fixture.

Check: with `tags/child.marko` `<for|x| of=input.x ?? []>x=${x.v} </for><${input.content}/>`, `pnpm run compile -- -o html -d template.marko` on that template emits `if (input.a)` with an `else` assigning `$x = _attrTag({ v: 2 })`, and a fixture rendering `{ a: false, b: true }` shows `x=2 text`.
