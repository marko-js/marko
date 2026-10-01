---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › unsubscribe
---

# Undo a caught body's effect subscription that runs in the flush its `@catch` streams in

A section that subscribes to a closure whose set already streamed does so through a resume effect (`_subscribe` → `_script`). When its `<try>` body is caught, the boundary's abort queues a `delete` for the subscription on the set's channel (`unsubscribe`). This works when the effect ran in an earlier flush. It fails when the body streamed inside a reorder that only applies in the flush the `@catch` streams in, because that reorder waited on a hole the rejection fills. The client handles the flush's `M._.r.push(...)`, including the `delete`, before `M._.w()` applies the reorder and runs its effects, so the subscribe runs last and the caught section keeps updating when the closure changes. One direction is to send the `delete` with the effects that run after the reorder applies, not with the resumes. Another is to keep a caught body's subscribe effects from running once its `@catch` reorder has arrived.

Check: a fixture whose `template.marko` is `import { rejectAfter, resolveAfter } from "../../utils/resolve";`, `<let/show=true/>`, `<pre id="log"/>`, `<try><await|v| = resolveAfter(1, 1)><try><script>document.getElementById("log").textContent += "[" + show + "]";</script><await|x| = rejectAfter(new Error("nope"), 2)>${x}</await><@catch|err|>caught ${err.message}</@catch></try></await><@placeholder>loading</@placeholder></try>`, `<button.toggle onClick() { show = !show }>${show}</button>`. Its `test.ts` has `equivalent: false` and steps `[{}, flush, flush, toggle]`, where toggle clicks `.toggle`. The SSR render's log should end as `[true]` after the toggle, but it reads `[true][false]`. With the inner `<await>` wrapped in its own `<try>` with a `@placeholder`, the outer reorder applies a flush earlier, and `try-catch-async-drops-effect-subscription-of-streamed-body` covers that case.
