---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/dom/queue.ts › queuePendingRender
---

# Replace the render queue's binary heap with a cursor-drained sorted array

`queuePendingRender`'s sift-up plus the sift-down inside `runRenders` are roughly 900 of `queue.ts`'s 1825 raw bytes, and they sit in the floor of every page with a client-writable `<let>` (`_let` → `schedule` → `run` → `runRenders`). Keeping `pendingRenders` sorted ascending by `PendingRenderProp.Key` with a monotone drain cursor and binary-search insertion measures -137 min / -62 brotli on a one-`<let>` page, -121/-43 on pages that also pull `prepareEffects`, and improves throughput for the normal case rather than regressing it — parity at N=1, 1.5-4x faster for N=100-1000 and for ascending keys (scope ids ascend in document order for created and resumed lists alike), degrading only above ~5000 renders per batch (2.5x slower at N=20000). Three gates the naive version fails: insertion must use the **upper** bound, because renders queued with `signalKey` `-1` are not slot-deduped and `setupBranch`, `_closure` and `_child_setup` routinely collide on one key (a differential test over 800 randomized batches showed 206/800 drain-order differences with lower-bound insertion and 171/800 with upper-bound, all confined to equal keys the heap already ordered arbitrarily — so upper-bound is a determinism improvement, but expect snapshot churn); it needs an `lo === pendingRenders.length ? push : splice` fast path, since a plain `splice` allocates a result array per queued render and is what makes the single-render case 1.55x slower; and `prepareEffects` swaps `pendingRenders` in and out, so the cursor must be saved and restored with it.

Check: TODO
