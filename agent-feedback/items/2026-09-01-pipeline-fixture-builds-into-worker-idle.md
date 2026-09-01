---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/__tests__/main.test.ts › ssrRunner
---

# Pipeline the next fixture build into the worker's idle time

A `--cpu-prof` of one `test:parallel` worker running `main.test.ts` alone
spends 32% of its wall time in `(idle)`: `createServerRunner` awaits rolldown,
whose work runs on native threads while the JS thread has nothing to do. With
one worker per core the other workers absorb some of that, but the run still
sits at ~80% core utilization, so the gap is the largest remaining bucket.

Building the next mode's (or fixture's) runner one step ahead of the tests that
consume it would overlap that wait with test work. What blocks it is that
`captureConsole()` swaps `globalThis.console`, so a build's compiler output
would land in whichever fixture is rendering (see the capture-console item).

Check: `node --cpu-prof --experimental-vm-modules node_modules/mocha/bin/_mocha
--config .mocharc.parallel.cjs packages/runtime-tags/src/__tests__/main.test.ts`
and read the `(idle)` share of self time.
