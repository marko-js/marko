---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/signals.ts › _closure_get
---

# Run a resumed closure subscriber's catch-up inside a scheduled run

With a `resumeId`, `_closure_get` registers `_resumed[resumeId] = (scope) => closureSignal(scope, 1)`, which resume runs as an Effect outside `run()` and `prepareEffects`. When the owner's value changed on the client before the subscriber resumed (Reorder content arriving after a root `<script>` wrote state), this catch-up calls `fn(scope)` with `rendering` unset. An `_or` it reaches queues a render with no `schedule()`, so the subscriber keeps the server value until an unrelated update flushes. A `_script` it reaches is pushed onto the global `pendingEffects`, so an Effect the server already registered for that scope runs a second time on that later flush. Direction: run the catch-up as a normal update does (queue it and `schedule()`, or run it inside `prepareEffects` and dedupe against the server-registered Effects), and add a MARKO_DEBUG assert in `queueRender` that a render queued outside `rendering` has a flush scheduled.

Check: fixture `template.marko` = `import { resolveAfter } from "../../utils/resolve";` `<let/n=1/>` `<let/m=2/>` `<button onClick() { m++ }/>` `<script>n = 5</script>` `<try><await|v|=resolveAfter(0, 1)><p>${n + m}</p><script>console.log("e" + n)</script></await><@placeholder>loading</@placeholder></try>`, `test.ts` with `equivalent: false` and steps `[{}, () => new Promise((r) => setTimeout(r, 50)), flush]` (the delay lets the flush that the root `<script>` scheduled finish before the second chunk streams): the flush step in `render-ssr.debug.md` logs `LOG "e5"` twice and `p::text "3" => "7"`, and replacing the `run()` in `main.test.ts`'s `flushAndRun` with a 50ms timeout makes that step leave `<p>3</p>` and log `e5` once.
