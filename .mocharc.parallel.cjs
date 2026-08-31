// `test:parallel` workers: the base config without bail (every worker reports
// all of its failures), room for a slice's slowest fixture, and the handoff
// module that keeps a worker inside its memory budget.
const base = require("./.mocharc.json");

module.exports = {
  ...base,
  bail: false,
  timeout: 30000,
  // V8's default limit sits above `MARKO_TEST_WORKER_MEM`, so a worker hands its
  // slice to a fresh process before collecting; a major GC is the cheaper trade.
  "node-option": [...base["node-option"], "max-old-space-size=2048"],
  require: [...base.require, "./scripts/test-parallel-worker.cjs"],
};
