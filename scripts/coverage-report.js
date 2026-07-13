// Parallel coverage report for `test:parallel`. `c8 report`'s v8->istanbul
// remap is single-threaded (~90s on 4 cores); this partitions the V8 dumps by
// script URL into N shards, runs a stock `c8 report` over each in parallel, and
// merges the disjoint istanbul maps — byte-identical to one `c8 report`, ~2.8x
// faster. Plain CommonJS: loading the `~ts` hook here breaks c8's report step.
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
const FINAL_REPORTERS = ["lcov", "text-summary"]; // match .c8rc.json
const SHARDS = Math.max(1, os.availableParallelism());

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

  const started = Date.now();
  const inDirs = shardDirs(".shard-in");
  const outDirs = shardDirs(".shard-out");
  const scratch = [...inDirs, ...outDirs];
  for (const dir of scratch) fs.rmSync(dir, { recursive: true, force: true });
  for (const dir of inDirs) fs.mkdirSync(dir, { recursive: true });

  partitionDumps(dumps, inDirs);
  await Promise.all(inDirs.map((dir, i) => runShard(dir, outDirs[i])));

  // Merge the disjoint shard maps, then emit the final reporters once.
  const map = libCoverage.createCoverageMap({});
  for (const dir of outDirs) {
    const file = path.join(dir, "coverage-final.json");
    if (fs.existsSync(file)) {
      map.merge(JSON.parse(fs.readFileSync(file, "utf8")));
    }
  }
  const context = libReport.createContext({ dir: COVERAGE, coverageMap: map });
  for (const name of FINAL_REPORTERS) {
    reports.create(name, {}).execute(context);
  }

  for (const dir of scratch) fs.rmSync(dir, { recursive: true, force: true });
  const secs = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`\ncoverage: ${SHARDS}-way parallel remap + merge in ${secs}s`);
}

// Route each script (and its source map) to a shard by URL, so every execution
// of a script lands together and each shard holds a whole — not partial — view.
function partitionDumps(dumps, inDirs) {
  for (const name of dumps) {
    const dump = JSON.parse(fs.readFileSync(path.join(TMP, name), "utf8"));
    const cache = dump["source-map-cache"] || {};
    const results = Array.from({ length: SHARDS }, () => []);
    const caches = Array.from({ length: SHARDS }, () => ({}));
    for (const script of dump.result) results[shardOf(script.url)].push(script);
    for (const url of Object.keys(cache))
      caches[shardOf(url)][url] = cache[url];
    for (let i = 0; i < SHARDS; i++) {
      fs.writeFileSync(
        path.join(inDirs[i], name),
        JSON.stringify({ result: results[i], "source-map-cache": caches[i] }),
      );
    }
  }
}

// Stable hash -> shard index, so a URL always routes to the same shard.
function shardOf(url) {
  let h = 0;
  for (let i = 0; i < url.length; i++) {
    h = (Math.imul(31, h) + url.charCodeAt(i)) | 0;
  }
  return ((h % SHARDS) + SHARDS) % SHARDS;
}

function runShard(inDir, outDir) {
  return new Promise((resolve, reject) => {
    const args = [
      C8_BIN,
      "report",
      "--temp-directory",
      inDir,
      "--reports-dir",
      outDir,
      "--reporter",
      "json",
    ];
    const child = spawn(process.execPath, args, {
      cwd: ROOT,
      stdio: ["ignore", "ignore", "inherit"],
    });
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0
        ? resolve()
        : reject(
            new Error(
              `coverage shard ${path.basename(inDir)} failed (exit ${code})`,
            ),
          ),
    );
  });
}

function shardDirs(prefix) {
  return Array.from({ length: SHARDS }, (_, i) =>
    path.join(COVERAGE, `${prefix}-${i}`),
  );
}
