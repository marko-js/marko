---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/catch.feat.ts › handlePendingTry
---

# Defer each try-body effect at most once until its `<try>` releases

`handlePendingTry` pushes `(fn, scope)` onto the try branch's `PendingEffects` on every deferral with no dedupe, so a `<script>` re-queued by two updates while the try is pending runs twice, both times with the latest state, when `runPendingEffects` drains the list. A script that appends, counts or subscribes then acts twice for one visible change. The `fnScopes` block in `_await_promise` dedupes only against `pendingEffects`, a different list. Direction: skip the push when that `(fn, scope)` pair is already in the branch's `PendingEffects`.

Check: fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<let/n=0/><button#inc onClick() { n++ }>inc</button><try><@placeholder>LOADING</@placeholder><script>console.log("script n=" + n)</script><await|v|=n ? resolveAfter(n) : 0>value ${v}</await></try>`, steps `[{}, inc, inc, wait]`: the update that shows `value 2` logs `script n=2` twice.
