---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/references.ts › finalizeReferences
---

# Short-circuit intersection serialization when references are already serialized

The intersection loop in `finalizeReferences` marks every pairwise-intersected binding with the other side's full sources (`addSerializeReason(binding1.section, binding2.sources, binding1)`), guarded only by `isForceSerialized` and `isSupersetSources` — the in-source TODO admits "in some cases we should be able to short circuit this if we know that the references are already serialized". A binding whose existing reason already covers the intersection's sources gets the merged reason anyway, widening its serialize guard and its owner-chain reasons (`addOwnerSerializeReason`) beyond what the intersection adds. Narrowing to the delta — skip when the pair's merged sources are a subset of the binding's resolved reason — shrinks scope writes and guard expressions without changing when serialization actually fires.

Check: `rg -n "in some cases we should be able to short circuit" packages/runtime-tags/src/translator/util/references.ts`
