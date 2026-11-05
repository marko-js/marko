// `pnpm run test:serial`: the base config plus every package's spec glob. A `.cjs`
// because mocha's JSON configs do not honour `extends` (the node options,
// bail, and timeout of `.mocharc.json` were silently dropped, and the ssr
// fixtures then failed with `vm.SourceTextModule is not a constructor`).
module.exports = {
  ...require("./.mocharc.json"),
  // Spec files sit at these three depths, so a lookup never walks the fixture
  // trees beneath them.
  spec: ["packages/*/{src/__tests__,test,test/*}/*.test.{js,ts}"],
};
