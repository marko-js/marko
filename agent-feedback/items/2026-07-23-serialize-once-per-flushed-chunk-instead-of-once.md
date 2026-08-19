---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › Boundary.flush
---

# Serialize once per flushed chunk instead of once per settled async

`Boundary.flush()` runs `flushSerializer` on every call, and `ServerRendered.#read`'s `onNext` calls it on each `boundary.endAsync()` even when the HTML write is deferred to the next `queueTick`. Each call appends its own `_=>[…]` closure to `state.resumes`, so N awaits settling in one chunk emit N payloads and the delta scope-id encoding in `writeScopesRoot` cannot span them — see `fixtures/async-reorder-nested-batched-resolve/__snapshots__/writes.html`, where one chunk pushes `_ => [5,…], _ => [7,…]`. Serialization cannot simply be skipped, since the serializer itself calls `boundary.startAsync()`; take `flush(write?)` and serialize only when `write` or `this.count === 0`, with `#read` passing through its existing `write` flag.

Check: that snapshot should regenerate with a single `_ =>` closure per chunk.
