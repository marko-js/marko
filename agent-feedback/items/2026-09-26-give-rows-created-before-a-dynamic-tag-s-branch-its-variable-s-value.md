---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/signals.ts › _for_closure
---

# Give rows created before a dynamic tag's branch the value derived from its tag variable

When a `<for>` whose rows read a value derived from a dynamic tag's variable is created before that tag's branch in the same client render (its collection's `<let>` is declared before the tag's name), each row's setup render runs before the branch's setup, which is queued at the newer branch id and makes the first `_return`. The derived value is computed only after that, and the loop-wide render `_for_closure` queues skips rows whose `Gen` is the current `runId`, on the assumption that they read the value in their own setup, so they never receive it. `_if_closure` and `_closure` skip same-run scopes the same way. Direction: order the dynamic branch's setup ahead of sibling scopes created later in the same render (as a static child's walk does), or let a closure render reach same-run scopes whose setup already ran.

Check: fixture with `tags/child.marko` = `<let/n=0/>` `<return={ n }/>` and `template.marko` = `import Child from "./tags/child.marko";` `<let/b=0/>` `<let/items=[1, 2]/>` `<let/Tag=Child/>` `<${Tag}/v/>` `<const/c=(v ? v.n : 0) + b/>` `<for|item| of=items><let/m=0/><button class="row" + item onClick() { m++; b++ }>${m + ":" + c}</button></for>`, `equivalent: false`, steps `[{}]`: `render-csr.debug.md` shows `0:undefined` in both rows, while `render-ssr.debug.md` shows `0:0`.
