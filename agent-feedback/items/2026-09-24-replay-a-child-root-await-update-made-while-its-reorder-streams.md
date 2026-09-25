---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Replay a child template's root `<await>` update made while its reorder streams

When an `<await>` sits at the root of a child template rendered inside a parent's `<try>` with a `@placeholder`, a client change to its value made before the server's content for it arrives is lost: once the reorder swaps in, the await shows the server's value and never the newer one. The same await written directly in the parent's `<try>` body replays the newer value. `awaitPromise` parks the value as a replay in the await's promise slot when the branch is not there yet (`!tryBranch`), so the adoption of the streamed branch for a child-root await apparently never runs that replay; look at how resume adopts a streamed await branch whose owner scope is a child template's scope rather than the try body's.

Check: a fixture with `tags/child.marko` = `<await|value|=resolveAfter(input.value, 1)>${value}</await>` and `template.marko` = `<let/count=0/><button onClick() { count++ }>inc</button><try><child value=count/><@placeholder>loading</@placeholder></try>`, `test.ts` steps `[{}, click, wait, flush, wait, click, wait]` with `equivalent: false`: `render-ssr.md` shows `0` after the flush (then `2`); inlining the child's `<await>` into the `<try>` body shows `1`.
