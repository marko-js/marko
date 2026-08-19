---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/dom/load.ts › _load_signal
---

# Cache the resolved lazy-module signal in `_load_signal`

The closure `signal` is assigned only in the `pending.then((mod) => queueAsyncRender(scope, (signal = mod._), value))` fallback; `insertLoaded` zeroes `branch[AccessorProp.Load]` and applies inputs through the per-entry record, never writing back into the closure. So the first input update after a lazy tag's content is inserted still takes the async arm — an extra promise tick plus a `queueMicrotask(run)` drain outside the current batch. Assign it once where `pending` is created (`pending.then((mod) => (signal ||= mod._), () => 0)`), keeping the `Load`-map arm first: between `Load = 0` and the `values.forEach` flush a synchronous write would be clobbered by the stale collected value.

Check: replay that flush against a scope, then call the signal — it must land without a microtask drain.
