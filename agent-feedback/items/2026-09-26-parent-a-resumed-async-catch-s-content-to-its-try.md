---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/resume.ts › createVisitBranches
---

# Parent a resumed async `@catch`'s content to its `<try>`

When a `<try>` body rejects after going async, the server streams the `@catch` content in a reorder chunk with a generated (non-numeric) reorder id, which `createVisitBranches` resolves to no branch, so the resumed catch content's scopes have no `ClosestBranch`. An error thrown by a later update of that content then escapes the flush instead of reaching the enclosing `<try>`'s `@catch`, as it does in CSR. Direction: adopt the reordered catch content into the branch in the try's slot; that branch is also serialized with `CatchContent` by `writeTryRenderers`, so keep `renderCatch` from treating it as the try that already caught.

Check: fixture with template `import { rejectAfter } from "../../utils/resolve";` + `<try><@catch|outer|>outer caught ${outer.message}</@catch><try><await|value|=rejectAfter(new Error("nope"), 1)>${value}</await><@catch|err|><let/n=0/><button onClick() { n++ }>${err.message} ${n ? (() => { throw new Error("from catch") })() : n}</button></@catch></try></try>`, `equivalent: false`, steps `[{}, flush, wait, click]`: `render-csr.debug.md` ends on `outer caught from catch`, while `ssr` fails with `Error: from catch` thrown from the flush.
