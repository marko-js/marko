---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagAnalyze
---

# Schedule work downstream of a `<define>` tag variable after its child renders

For a `<define>` call, `knownTagAnalyze` sets the tag variable's value expression to `contentSection.returnValueExpr`, so the variable's `Sources` are the define body's sources rather than the variable itself. Its value arrives when the child's `_return` runs, in a child render, but `references.ts › getMaxOwnSourceOffset` and `resolveIntersectionSource` read those `Sources` as if the value were computed in the parent's own pass. A binding derived from the variable (`<const/c=a + 1/>`) gets an `_or` with no scope offset, so it runs before the child and is then dropped; an intersection of the variable with the closure its body returns (`outer`) is lowered as a source intersection called only from `outer`, so the variable's signal has no downstream at all. Direction: let a tag variable be the scheduling root for the parent's work (its own source for the scope offset and source-intersection checks) while its serialize reasons keep following the return expression.

Check: fixture `template.marko` = `<define/Let><let/internal=0><return:=internal></define>` `<Let/a/>` `<let/b=0>` `<const/c=a + 1/>` `<button onClick() { a++; b++ }>${`${c},${b}`}</button>` with steps `[{}, click button]` renders `1,1` (expected `2,1`) and logs the debug "queued again after it already ran" error. Fixture `<let/outer=0/>` `<define/Plus><return=outer + 1></define>` `<Plus/a/>` `<button onClick() { outer++ }>${`${a},${outer}`}</button>`: CSR renders `undefined,0` and resume shows `undefined,1` after a click; `pnpm run compile -- -o dom -d` shows `$a = _var_resume(..., _const("a"))` with no downstream.
