---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Apply an await update to content streamed in order after resume

An `<await>` with no `@placeholder` of its own streams in order, but an earlier `<try>` with a `@placeholder` resumes the page before that content arrives. A value the client changes in between waits as a replay in the await's promise slot, and nothing runs it: `_await_content` does not run for resumed content, and with no placeholder there is no await counter whose completion could. The content shows the stale server value until the next change. The out-of-order case replays through the placeholder counter; the in-order case needs a trigger when its chunk's branch is adopted, without adding work to `resume.ts` for pages that never hit it.

Check: a fixture with `<let/value=0/>`, `<try><@placeholder>loading button</@placeholder><await|x|=resolveAfter(1, 1)><button onClick() { value++ }>${value}</button></await></try>`, then `<await|v|=value ? value : resolveAfter(value, 3)><div>${v}</div><script>console.log("effect " + v)</script></await>`, steps `[{}, flush, wait, click, flush, wait, click, wait]`, `equivalent: false`: `render-ssr.md` shows `<button>1</button><div>0</div>` once the content arrives, while `render-csr.debug.md` shows the div following the button.
