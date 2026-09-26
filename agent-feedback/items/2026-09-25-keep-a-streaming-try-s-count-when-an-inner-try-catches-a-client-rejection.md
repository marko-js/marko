---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Keep a streaming `<try>`'s count when an inner `<try>` catches a client rejection

`_await_promise`'s rejection arm sets `awaitCounter.i = 0` whenever the counter carries `.m` (a resumed, still-streaming try's counter), even when an inner `<try>` with `@catch` handles the rejection. That discards the server's pending count for the outer try, so its streamed content never swaps in: `@placeholder` stays forever and the inner `@catch` content never shows. The arm's comment ("zero a placeholder-less or resumed one") holds only when the catching `<try>` is the counter's own, which `renderCatch` then replaces with its catch content. Direction: zero the counter only when the `<try>` that catches the error encloses the counter's try (`renderCatch` already finds it), and otherwise release through `c()` as the arm does for a client counter.

Check: fixture with template `import { rejectAfter, resolveAfter } from "../../utils/resolve";` + `<let/value=0/><button onClick() { value++ }>${value}</button><try><@placeholder>loading</@placeholder><try><@catch|err|>caught ${err.message}</@catch><await|v|=value ? rejectAfter(new Error("client " + value), 1) : resolveAfter("server", 1)><div>${v}</div></await></try></try>`, `equivalent: false`, steps `[{}, click, wait, flush, wait]`: `render-csr.debug.md` ends on `caught client 1`, while `render-ssr.debug.md` ends on `loading` with the streamed `<div>server</div>` left inside the hidden `<t>`.
