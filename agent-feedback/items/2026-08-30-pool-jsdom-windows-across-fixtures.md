---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/__tests__/utils/create-browser.ts › createBrowser
---

# Pool jsdom windows across fixtures

`createBrowser` builds a fresh `JSDOM` for each of a fixture's ssr and csr runs
and jsdom re-installs every Web IDL class onto the new realm each time, which
is ~10% of the test worker's main-thread inclusive cost. A pool recovers under
3% of wall, though, because the reset it needs is most of the cost it saves,
and the reset is hard to get right: clearing the realm's added globals (the
resume registry is a global named for the runtime id), replacing the document,
dropping the `importWithContext` module cache and cancelling tracked timers
still leaves fixtures reading each other's counters. Worth revisiting only with
a reset that is provably complete, since a leak is a cross-fixture correctness
bug rather than a slow test.

Check: `--cpu-prof` one worker of `node scripts/test-parallel.js` and read the
inclusive cost of `exports.createWindow`.
