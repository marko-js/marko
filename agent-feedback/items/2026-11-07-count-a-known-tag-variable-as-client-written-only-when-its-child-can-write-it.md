---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › getReturnParams
---

# Count a known tag's variable as client-written only when its child can write what it returns

`getReturnParams` returns `true` whenever the child's `<return>` reads the child's state, so the call site's tag variable is its own state source (no `derivedFrom`) with `returnedBy`, which `hasResumableWriter` counts as written on the client. A child whose returned state only server-run code assigns still makes its caller resume the child scope (`addAlwaysReason` on the child scope binding), register `_var_resume`, write a subscriber set, and give each late subscriber a subscribe id, though the value never changes after the server render. The child's analysis is complete when its caller reads it, so the caller can ask whether the returned state has a resumable writer (`hasResumableWriter` over the child return value's `state` sources) and treat the variable as unchangeable when it has none.

Check: `tags/count.marko` holding `<let/count=1/>`, `<const/inc=() => count++/>`, `<span>${typeof inc}</span>` and `<return=count/>`, rendered by `template.marko` as `<Count/count/>` followed by `<try><await|v|=Promise.resolve(1)><p>${count}</p></await><@placeholder>loading</@placeholder></try>`: `pnpm run compile -- -o dom template.marko` registers `_var_resume` and passes a subscribe id to `_closure_get`; `-o html` writes the child scope and the subscriber set.
