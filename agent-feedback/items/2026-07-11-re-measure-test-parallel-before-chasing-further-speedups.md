---
type: dx
impact: med
effort: high
site: scripts/test-parallel.js
---

# Re-measure `test:parallel` before chasing further speedups

The "CPU-bound, so packing and worker count can't help" conclusion rests on a profile that no longer describes the tooling: `@babel/register` is gone (Node strips types natively) and the `c8 report` pass was replaced by zcov in a2ac845475. Nothing has re-profiled a worker since. If a fresh profile still shows significant idle, the one identified win — pipelining the next fixture's `createServerRunner()` build one fixture ahead, gated on `MARKO_TEST_SLOTS` — remains blocked by `packages/runtime-tags/src/__tests__/utils/capture-console.ts`, which patches `globalThis.console` process-wide so a concurrent build's output lands in another test's capture window; scope that capture first.

Check: by `--cpu-prof`-ing one worker of `node scripts/test-parallel.js`.
