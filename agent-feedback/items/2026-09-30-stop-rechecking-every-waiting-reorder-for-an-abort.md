---
type: perf
impact: med
effort: low
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushScript
---

# Stop rechecking every waiting reorder for an abort on every pass

`flushScript`'s reorder loop calls `isAborted(chunk.boundary)` for each requeued chunk still waiting at the front of `state.writeReorders`, on every flush pass, so a page with many reorders pending at once pays O(passes × waiting) boundary walks, each reading Node's `AbortSignal` getters (`get signal`, and `get aborted`, which calls `refreshCompositeSignal`). A waiting chunk can only have stranded if a boundary aborted since the last check, which `State.stranded` already records, so the walk can be skipped unless it is set. Since nested `<try>` boundaries abort synchronously with their parent, a chunk's own `boundary.signal.aborted` would also do in place of the walk.

Check: count calls in `isAborted`, then stream a template of n `<try>`s, each with a `@placeholder` and an `<await>` on its own promise, resolving one promise per `setImmediate` in order; calls grow with n² (about 19k, 69k and 264k for n = 250, 500 and 1000), and a CPU profile of the 1000 case puts `isAborted` and those getters near a quarter of the samples.
