---
type: bug
impact: low
effort: high
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Keep a newer client await value over the server's rejection of an old one

When the client changes an `<await>` value while the server's value for it is still streaming, and the server's value then rejects, the streamed `@catch` content replaces the placeholder and wins over the newer client value; client rendering, and the same update after the content arrived, show the new value instead. The newer value waits in the await's promise slot for a branch that never arrives, and nothing can take its place: `_try`'s body renderer is only reachable from the owner's setup signal (unregistered), and the reorder runtime swaps the catch HTML in without branch markers, so resume can neither re-create the body nor find the catch nodes to replace. A fix needs a resumable way to re-render a `<try>` body (a registered body renderer and marked catch content) plus a trigger when the catch arrives while a newer value waits under it.

Check: a fixture with `<let/value=0/><button onClick() { value++ }>${value}</button>` and `<try><@placeholder>loading</@placeholder><@catch|err|>caught ${err.message}</@catch><await|v|=value ? value : rejectAfter(new Error("server"), 1)><div>${v}</div></await></try>`, steps `[{}, click, flush, wait]`, `equivalent: false`: `render-ssr.md` ends on `caught server`, `render-csr.debug.md` on `<div>1</div>`.
