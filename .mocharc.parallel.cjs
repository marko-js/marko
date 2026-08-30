// `test:parallel` workers: the base config without bail (every worker reports
// all of its failures), room for a slice's slowest fixture, and the handoff
// module that keeps a worker inside its memory budget.
const base = require("./.mocharc.json");

module.exports = {
  ...base,
  bail: false,
  timeout: 30000,
  require: [...base.require, "./scripts/test-parallel-worker.cjs"],
};
