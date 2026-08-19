---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/serialize-guard.ts › getOrHoist
---

# Route multi-section serialize-guard disjuncts through the dedupe tracking

`getOrHoist` dedupes and hoists only on its `onlySection` branch; when `getOnlySection(reason.param)` returns undefined the fallback loop over `groupParamsBySection(reason.param)` calls `buildGuardExpr` directly and never consults or updates `seenReasons`/`hoistedReasons`, so an identical single-section guard is re-emitted inline even though it is already hoisted and lexically in scope. In `known-tag-args-spread/__snapshots__/html.bundle.js` line 3 declares `$si__input = _serialize_if($scope0_reason, 0)` while line 12 still emits `(_serialize_if($scope0_reason, 0) || _serialize_if($scope1_reason, 0))`. Look each disjunct up as a synthesized `{ state: undefined, param: params }` in `getSectionReasonState(paramsSection)[isGuard ? "guard" : "if"]`.

Check: `grep -Fn '_serialize_if($scope0_reason, 0)' packages/runtime-tags/src/__tests__/fixtures/known-tag-args-spread/__snapshots__/html.bundle.js` must stop reporting both a declarator and an inline copy.
