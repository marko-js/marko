// Parallel coverage report for the `test:parallel` run.
//
// `c8 report`'s cost is v8->istanbul remapping (applying source maps to turn V8
// byte-range coverage into istanbul line/branch coverage) — single-threaded
// over every executed script, ~90s of the CI coverage job. Here we run N
// `c8 report --reporter=json` shards in parallel: each reuses c8's real merge
// (so every shard sees the same fully-merged V8 ranges) but, via the
// `scripts/c8-shard.js` preload, (a) skips third-party node_modules scripts
// (~half of them, and they can't map to marko src) and (b) remaps only its 1/N
// slice of the survivors. The slices are disjoint, so merging the shards'
// istanbul maps is identical to a single `c8 report` — branches and all — just
// spread across cores and skipping the waste (measured ~3x: 90s -> 30s).
//
// Plain CommonJS, no `~ts` hook (this is the c8-adjacent process; loading a
// require hook here has historically broken c8's istanbul report step).
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const libCoverage = require("istanbul-lib-coverage");
const libReport = require("istanbul-lib-report");
const reports = require("istanbul-reports");

const ROOT = path.resolve(__dirname, "..");
const COVERAGE = path.join(ROOT, "coverage");
const TMP = path.join(COVERAGE, "tmp");
const C8_BIN = path.join(ROOT, "node_modules", "c8", "bin", "c8.js");
const SHARD_PRELOAD = path.join(__dirname, "c8-shard.js");
// Match `.c8rc.json`'s reporters for the merged output.
const FINAL_REPORTERS = ["lcov", "text-summary"];

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main() {
  const dumps = fs.existsSync(TMP)
    ? fs.readdirSync(TMP).filter((f) => f.endsWith(".json"))
    : [];
  if (!dumps.length) {
    console.error(
      `No V8 coverage dumps in ${path.relative(ROOT, TMP)}. ` +
        `Was the suite run with NODE_V8_COVERAGE=${path.relative(ROOT, TMP)}?`,
    );
    process.exit(1);
  }

  // More shards keep remapping busy but each re-merges the dumps, so returns
  // diminish past the core count; cap there.
  const shards = Math.max(1, os.availableParallelism());
  const started = Date.now();

  const shardDirs = Array.from({ length: shards }, (_, i) =>
    path.join(COVERAGE, `.shard-${i}`),
  );
  await Promise.all(shardDirs.map((dir, i) => runShard(i, shards, dir)));

  // Merge the disjoint shard maps into one, then emit the final reporters once.
  const map = libCoverage.createCoverageMap({});
  for (const dir of shardDirs) {
    const file = path.join(dir, "coverage-final.json");
    if (fs.existsSync(file)) {
      map.merge(JSON.parse(fs.readFileSync(file, "utf8")));
    }
  }
  const context = libReport.createContext({ dir: COVERAGE, coverageMap: map });
  for (const name of FINAL_REPORTERS) {
    reports.create(name, {}).execute(context);
  }

  for (const dir of shardDirs) fs.rmSync(dir, { recursive: true, force: true });
  const secs = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`\ncoverage: ${shards}-way parallel remap + merge in ${secs}s`);
}

// Run `c8 report` over all dumps but, via the C8_SHARD preload, remap only this
// shard's scripts, emitting the istanbul json map.
function runShard(id, total, reportDir) {
  return new Promise((resolve, reject) => {
    const args = [
      "--require",
      SHARD_PRELOAD,
      C8_BIN,
      "report",
      "--temp-directory",
      TMP,
      "--reports-dir",
      reportDir,
      "--reporter",
      "json",
    ];
    const child = spawn(process.execPath, args, {
      cwd: ROOT,
      env: { ...process.env, C8_SHARD: `${id}:${total}` },
      stdio: ["ignore", "ignore", "inherit"],
    });
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`coverage shard ${id} failed (exit ${code})`)),
    );
  });
}
