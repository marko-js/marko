---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/html/serializer.ts › writeReferenceOr
---

# Cut per-value Reference allocation in data-heavy serialization

With the prototype-dispatch and char-code key-escaping fast paths already landed, a 464 KB data payload (nested product records, arrays, long strings) is dominated by intrinsic bookkeeping: ~12% GC from the `new Reference` that `writeReferenceOr` and `writeString` (strings over `STRING_DEDUP_LENGTH`) allocate for every object, array, and long string. Each is retained by the `refs` WeakMap for as long as its value lives, even though most back a value that is written once and never referenced again. `assignId`'s early return needs only `ref.pos` when `ref.flush === state.flush`; only the cross-flush path needs parent/accessor. Any lazy scheme has to respect two constraints: the Reference is also the `parent` handed to every nested write (and what `isCircular`/`isAncestorMember` walk), so a container still needs an object identity at write time; and a later flush cannot patch an already-shipped buffer (`stringifyScopes` resets `state.buf`), so a position-only marker cannot be upgraded on reuse without parent+accessor -- dropping them would duplicate the value instead of deduping it, changing payload size and browser-side identity. So the realistic version is a slimmer per-value record (pos/parent/accessor) upgraded to a full Reference with id/assigns/calls/channel only on reuse -- a deep change to the reference model, not a spot fix.

Check: with the serializer suite (especially cross-flush dedup) plus the benchmark's GC share.
