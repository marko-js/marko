const os = require("os");

// The fixture suite (packages/runtime-tags/src/__tests__) is split into
// main.shard-*.test.ts files so that `parallel` can spread it across workers.
// `jobs` follows the core count so every core is used (the main process only
// coordinates during a parallel run).
module.exports = {
  bail: true,
  timeout: 10000,
  "no-warnings": true,
  "enable-source-maps": true,
  "experimental-vm-modules": true,
  parallel: true,
  jobs: Math.max(2, os.availableParallelism()),
  require: ["~ts"],
  spec: ["packages/*/@(src|test)/**/*.test.@(js|ts)"],
};
