---
type: perf
impact: med
effort: high
site: scripts/test-parallel.js › packBins
---

# Schedule test-parallel slices dynamically

`packBins` assigns every slice up front and assumes each costs the same, so a
run finishes when its unluckiest worker does: on four cores the workers land
around 35s, 36s, 38s and 41s, and the last one sets the wall time. The spread
is fixture cost variance, not slicing granularity — raising `SLOT_TOTAL` from
`WORKERS * 16` to `WORKERS * 256` leaves it unchanged, since each worker
already runs ~280 fixtures. Recovering the tail needs workers to claim slices
as they free up rather than owning a fixed set, which the suites' `beforeEach`
skip hook could already express; the hard part is that mocha registers every
suite at load time, so a claim has to be cheap enough to run per suite.

Check: `taskset -c 0-3 node scripts/test-parallel.js` and compare the per-worker
times it prints.
