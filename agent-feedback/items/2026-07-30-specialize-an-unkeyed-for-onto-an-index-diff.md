---
type: perf
impact: high
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › loop
---

# Specialize an unkeyed `<for>` onto an index-diff loop without keyed move reconciliation

All four `_for_*` exports share one `loop()` factory whose `oldScopesByKey` Map, common-suffix scan and LIS move planner are unreachable when the loop key is the item index — `_for_of` defaults `by` to the callback's second argument and `_for_to`/`_for_until` are emitted with literal `from=0, step=1`, so `start` always reaches `min(oldLen, newLen)` — and because the planner sits inside the signal the shared factory returns, none of it tree-shakes. Substituting an index-diff helper in the built page entry measures dom 7088/3281 → 6459/2939 for `<for|i| to=n>` (-629 min / -342 brotli) and 7127/3278 → 6447/2933 for an unkeyed `<for|item| of=list>`, with faster updates too (no Map build or LIS pass per render). The HTML side already draws this distinction — `html/writer.ts` › `_for_of` calls `forOf(list, cb)` with no key bookkeeping when `by` is falsy — so `translator/core/for.ts` › `forTypeToDOMRuntime` can select the variant when no `by` attribute is present. Two gates an obvious implementation misses: `branch[AccessorProp.LoopKey] = key` cannot be dropped, because for an unkeyed loop `core/for.ts` sets `keyBinding.scopeAccessor = LoopKey` and that slot _is_ the loop param's storage; and the choice is effectively whole-program, since a page shipping both helpers measures +592 min / +99 brotli against shipping only `loop`.

Check: build a `<let>`-driven `<for|i| to=n>` fixture (baseline 7088/3281), delete the Map/suffix/LIS tail from its bundled `dom` page entry, and re-minify.
