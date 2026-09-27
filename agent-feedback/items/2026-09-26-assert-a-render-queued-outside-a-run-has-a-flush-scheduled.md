---
type: dx
impact: low
effort: med
site: packages/runtime-tags/src/dom/queue.ts › queueRender
---

# Assert a render queued outside a run has a flush scheduled

A render queued while not `rendering` stays pending until something calls `run()`, so a caller that skips `schedule()` (or `queueAsyncRender`) leaves its content stale until an unrelated update flushes it. The fixture harness hides this: `runSteps` in `packages/runtime-tags/src/__tests__/main.test.ts` calls `run()` after every interaction and `Wait` step, so such a render still passes every render snapshot. Direction: a `MARKO_DEBUG` assert in `queueRender` that a render queued outside `rendering` has a flush scheduled; `queueAsyncRender` queues its `run` microtask only for the first pending render, so it needs restructuring to expose that state to the assert.

Check: delete the `schedule()` call in `_let` (`packages/runtime-tags/src/dom/signals.ts`) and run `pnpm test -- --grep "runtime-tags/translator basic-counter "`: the `ssr` and `csr` render checks still pass and only the `sizes.json` gate fails.
