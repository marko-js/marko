---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Keep a newer client await value over the server's rejection of an old one

When the client changes an `<await>` value while the server's value for it is still streaming, and the server's value then rejects, the streamed `@catch` content replaces the placeholder and wins over the newer client value. Client rendering, and the same update after the content arrived, show the new value instead. Whatever resolves the streamed outcome for a superseded value should hand the boundary to the client's latest value rather than render the stale rejection.

Check: a fixture with `<let/value=0/><button onClick() { value++ }>${value}</button>` and `<try><@placeholder>loading</@placeholder><@catch|err|>caught ${err.message}</@catch><await|v|=value ? value : rejectAfter(new Error("server"), 1)><div>${v}</div></await></try>`, steps `[{}, click, flush, wait]`, `equivalent: false`: `render-ssr.md` ends on `caught server`, `render-csr.debug.md` on `<div>1</div>`.
