const os = require("node:os");

const base = require("./.mocharc.json");

// Mocha defaults to one job per core *minus one*; the spare core is worth more
// as a worker on the small runners CI uses.
module.exports = {
  ...base,
  bail: false,
  timeout: 30000,
  parallel: true,
  jobs: os.availableParallelism(),
};
