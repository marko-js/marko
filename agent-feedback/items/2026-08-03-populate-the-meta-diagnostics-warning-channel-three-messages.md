---
type: dx
impact: high
effort: med
site: packages/compiler/src/babel-utils/diagnostics.js › diagnosticWarn
---

# Populate the `meta.diagnostics` warning channel; three messages cover 1024 fixtures

The warning pipeline works and is snapshot-tested, but almost nothing feeds it. `babel-utils/diagnostics.js` exposes four non-throwing channels; runtime-tags uses `diagnosticSuggest` not at all, `diagnosticError` only to collect analyze failures, and spends its entire author-facing vocabulary on five `diagnosticWarn`/`diagnosticDeprecate` sites — the `<attrs>` and `<effect>` deprecations, duplicate native attributes, camelCase `style=` keys, and `core/style.ts`'s dynamic placement — of which only the first three are exercised by any fixture, 21 of 1024 fixture dirs carrying a `diagnostics*.md` snapshot. A survey of 60 hand-written templates meanwhile turned up 21 distinct compile-clean-but-wrong behaviours, several decidable from data the translator already computes, and each produces `[]` diagnostics in both `html` and `dom` today. Direction: make the channel the home for statically-detectable silent failures, not just deprecations, and note that a consumer which only catches thrown errors never sees a warning at all, so anything attached to a thrown `CompileError` has to reach `errorRecovery` diagnostics too.

Check: `rg -n 'diagnosticWarn|diagnosticDeprecate' packages/runtime-tags/src` lists five sites, `rg -n 'diagnosticSuggest' packages/runtime-tags/src` matches nothing, and `find packages/runtime-tags/src/__tests__/fixtures -name 'diagnostics*.md' | wc -l` prints 21.
