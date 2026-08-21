---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › isBranchSectionChain
---

Cluster E (scope-relative fill addressing) repro: a fill read inside
`@placeholder` content whose chain to the owner crosses a non-branch content
section fails two ways.

Template shape (persisted, interactive):

```marko
<let/count=0/>
<button onClick() { count++ }>${count}</button>
<wrap>            // tags/wrap: <section><${input.content}/></section>
  <try>
    <await=input.promise><div>done</div></await>
    <@placeholder><em>${input.msg}</em></@placeholder>
  </try>
</wrap>
```

- A patch while the placeholder shows rejects (fail closed): the frame's
  nested `PatchChild:BranchScopes:…` hop chain through the wrap content
  branch does not apply.
- Worse and timing-dependent: the INITIAL page resume can throw
  `Cannot create property '#Id' on string '…*content;b%;<!><!><!>'` —
  the boundary content record string lands in a plain resume scope-payload
  list and `applyScopes` (non-patching path, `src/dom/resume.ts`) treats it
  as a scope object. Record strings are only understood by the patching
  path (`onPatchRecord`).

Also note: an intersection read (`input.msg + ":" + count`) inside a
stateful branch whose chain includes a content section DOES deliver today
(pinned by `persisted-fill-content-in-stateful`), so `signals.ts`'s
leaves-the-ladder `continue` is narrower than the fail-closed inventory
implies — the boundary-content-through-content chain above is the live gap.

Check: recreate the fixture above with `resolveAfter(100)` promises; the ssr
run fails with the resume TypeError or the patch rejection depending on
timing.
