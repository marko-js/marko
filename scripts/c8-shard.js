// Preload (`node --require`) for the parallel coverage report
// (scripts/coverage-report.js). It wraps c8's Report factory so each
// `c8 report` process does less of the expensive v8->istanbul remap while
// producing output identical to a single `c8 report`:
//
//   1. Skip third-party `node_modules` scripts. Coverage only counts
//      `packages/*/src`, and a dependency's coverage can never map back to marko
//      src (only the workspace-symlinked `@marko`/`marko` packages can, so those
//      are kept) — so remapping chai/jsdom/babel/rolldown/etc. is pure waste
//      that c8's after-remap exclude discards anyway. It's ~half the scripts.
//   2. Remap only this shard's `1/total` slice of the survivors
//      (C8_SHARD="<id>:<total>"), fanning the rest across cores.
//
// Both filters run on c8's own fully-merged V8 ranges, so the shards' istanbul
// maps are disjoint and merge back to exactly the single-process result.
const path = require("node:path");

const [id, total] = (process.env.C8_SHARD || "0:1").split(":").map(Number);
const THIRD_PARTY = /[/\\]node_modules[/\\]/;
const MARKO_PACKAGE = /[/\\]node_modules[/\\](@marko[/\\]|marko[/\\])/;

const reportPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "c8",
  "lib",
  "report.js",
);
const factory = require(reportPath);
// Swap c8's Report factory in the module cache so commands/report.js picks up
// our wrapper; each instance keeps c8's real merge/config/exclude logic.
require.cache[reportPath].exports = function shardedReport(opts) {
  const instance = factory(opts);
  const merge = instance._getMergedProcessCov.bind(instance);
  instance._getMergedProcessCov = () => {
    const cov = merge();
    cov.result = cov.result
      .filter((s) => !THIRD_PARTY.test(s.url) || MARKO_PACKAGE.test(s.url))
      .filter((_, i) => i % total === id);
    return cov;
  };
  return instance;
};
