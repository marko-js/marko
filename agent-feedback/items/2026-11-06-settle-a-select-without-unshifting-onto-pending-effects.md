---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_select_value
---

# Settle a select without unshifting onto `pendingEffects`

`_attr_select_value_default` and `_attr_select_value` (in both the debug option assertion and the live `setSelectValue`) queue work with `pendingEffects.unshift(fn, scope)`. These are the only writes to `pendingEffects` that skip `queueEffect`'s `push`. Unshifting so the select settles before every effect already queued holds an effect order, which package AGENTS.md › Effects rules out (CONTEXT.md _Effect_: no order is guaranteed, so no code holds one). It also moves the whole queue on every call in an apply step: a run that updates N selects among E queued effects costs O(N·(E+N)). The select waits for effects because it needs its options rendered. Settle it at a point that follows its run's renders by construction, such as where the options' renders finish or a runtime step between renders and effects, and queue nothing ahead of other effects.

Check: `grep -n "unshift" packages/runtime-tags/src/dom/*.ts` lists only the three `pendingEffects.unshift` calls in `controllable.ts`; `queue.ts` › `queueEffect` pushes.
