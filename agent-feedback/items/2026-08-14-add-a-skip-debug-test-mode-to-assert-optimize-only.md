---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/__tests__/main.test.ts › TestConfig
---

# Add a `skip_debug` test mode to assert optimize-only patch rejection

A fed renderer change rejects to navigation exactly when optimize shook the dispatcher (`persisted-content-root-swap` asserts the debug-mode apply via `skip_optimize`), but nothing asserts the optimized rejection because `expect_rejection` is mode-global and there is no `skip_debug`. A `skip_debug` (or per-mode `expect_rejection`) would let that fail-closed path pin its behavior.

Check: run the swap fixture without `skip_optimize`; the optimize `ssr` step rejects while debug applies.
