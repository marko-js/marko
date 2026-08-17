// `pnpm test`: the base config plus every package's spec glob. A `.cjs`
// because mocha's JSON configs do not honour `extends` (the node options,
// bail, and timeout of `.mocharc.json` were silently dropped, and the ssr
// fixtures then failed with `vm.SourceTextModule is not a constructor`).
module.exports = {
  ...require("./.mocharc.json"),
  spec: ["packages/*/@(src|test)/**/*.test.@(js|ts)"],
};
