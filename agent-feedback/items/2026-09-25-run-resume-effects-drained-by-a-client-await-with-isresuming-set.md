---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Run resume effects drained by a client `<await>` with `isResuming` set

`dom/controllable.ts` › `_attr_input_value_script` (and the checked/select variants) seeds `ControlledValue` from the server-rendered default only while `isResuming`, which `dom/resume.ts` › `runResumeEffects` sets just around its own pass. When a client-updated `<await>` inside a resumed, still-streaming `<try>` settles last, its resolution calls the inline placeholder's `c()` (which pushes the root's reorder effects into `render.r`) and then drains them through `awaitCounter.m([])` and `queueEffect`, so they run with `isResuming === 0`. The resumed controllable never gets its `ControlledValue`, and the first input event sets the input's value to `"undefined"`. Direction: tag effects that come from resume data so they always run inside the resume window, covering both this drain and resume effects deferred into a branch's `PendingEffects`.

Check: a fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<let/n=0/><let/text="hi"/><button onClick() { n++ }>refresh</button><try><@placeholder>loading</@placeholder><await|v|=resolveAfter(n, n ? 2 : 1)><span>${v}</span></await><await|w|=resolveAfter("w", 1)><input value=text valueChange() {}/></await></try>`, `equivalent: false`, and steps `[{}, click, flush, wait, type, wait]` where `type` sets `input.value = "abc"`, dispatches `input`, then appends a `<pre>` with `input.value`: `render-ssr.md` shows `value=undefined`, `render-csr.debug.md` shows `value=hi`.
