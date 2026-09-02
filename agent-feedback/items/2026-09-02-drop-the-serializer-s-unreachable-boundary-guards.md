---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writePromise
---

# Drop the serializer's unreachable boundary guards

`writePromise`, `writeReadableStream` and `writeAsyncGenerator` each bail with `if (!boundary) return false`, treating the value as unserializable. `State#boundary` is only ever `undefined` before the first write, and the single entry point that reaches these — `Serializer#stringifyScopes(flushes, boundary, channel)` — takes `boundary` as a required `Boundary` and assigns it before delegating, so no call can reach a write with no boundary. `writeReadableStream`'s guard is `!boundary || val.locked`, where the `val.locked` half is live and tested.

Check: coverage over the full suite leaves the taken side of `writePromise`'s and `writeAsyncGenerator`'s `if (!boundary)` unhit (`writeReadableStream`'s reads as covered only because `val.locked` is always evaluated after the dead disjunct); `Serializer#stringifyScopes` has no overload that omits `boundary`.
