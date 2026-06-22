"use strict";
// Custom parallel test runner (`npm run test:fast`).
//
// `npm test` uses mocha's built-in `--parallel`, which spreads work at file
// granularity. That splits the runtime-class tests across workers, where they
// re-load heavy modules and contend with the fixture bundling. This runner
// instead groups the suite and runs each group as its own serial mocha process,
// in parallel across cores:
//
//   - runtime-class: all files in one process, in order (they share mutable
//     compiler state, so they are kept together and unsplit).
//   - runtime-tags fixtures: sharded via the `MARKO_TEST_SHARD` env var that
//     `main.test.ts` understands (bypasses the main.shard-*.test.ts files).
//   - runtime-tags (non-main): the small, fast remaining files.
//
// It tends to edge out `--parallel` here and avoids its cross-worker flakiness,
// at the cost of being a bespoke script. Coverage still works because c8
// propagates `NODE_V8_COVERAGE` to the child processes.

const cp = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MOCHA = require.resolve("mocha/bin/mocha.js");
const extraArgs = process.argv.slice(2);
// Reuse the canonical mocha config (require hooks, node flags, timeout, bail),
// but run each group serially in its own process.
const baseConfig = {
  ...require(path.join(ROOT, ".mocharc.cjs")),
  parallel: false,
};
delete baseConfig.jobs;

// When the caller targets a subset (`-- --grep <fixture>`) or rewrites snapshots
// (`UPDATE_EXPECTATIONS=1`), defer to a single serial mocha run instead.
if (extraArgs.length || process.env.UPDATE_EXPECTATIONS) {
  const child = cp.spawn(process.execPath, [MOCHA, ...extraArgs], {
    cwd: ROOT,
    stdio: "inherit",
  });
  child.on("close", (code) => process.exit(code ?? 1));
  return;
}

const cpus = Math.max(1, os.availableParallelism?.() ?? os.cpus().length);
// One lane is taken by the (unsplittable) runtime-class group, so the fixture
// shards fill the rest.
const mainShards = Math.max(2, cpus - 1);

// Heaviest groups first so the worker pool starts them first.
const groups = [
  {
    name: "runtime-class",
    spec: ["packages/runtime-class/test/**/*.test.js"],
  },
  ...Array.from({ length: mainShards }, (_, i) => ({
    name: `fixtures ${i + 1}/${mainShards}`,
    spec: ["packages/runtime-tags/src/__tests__/main.test.ts"],
    env: { MARKO_TEST_SHARD: `${i}/${mainShards}` },
  })),
  {
    name: "runtime-tags",
    spec: ["packages/runtime-tags/src/__tests__/!(main*).test.ts"],
  },
];

run();

async function run() {
  const start = Date.now();
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-test-"));
  let nextGroup = 0;
  const results = [];

  try {
    await Promise.all(
      Array.from({ length: Math.min(cpus, groups.length) }, async () => {
        while (nextGroup < groups.length) {
          results.push(await runGroup(groups[nextGroup++], tmpDir));
        }
      }),
    );
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }

  reportAndExit(results, Date.now() - start);
}

function runGroup(group, tmpDir) {
  const configFile = path.join(
    tmpDir,
    `${group.name.replace(/\W+/g, "_")}.json`,
  );
  fs.writeFileSync(
    configFile,
    JSON.stringify({ ...baseConfig, spec: group.spec }),
  );

  return new Promise((resolve) => {
    const child = cp.spawn(
      process.execPath,
      [MOCHA, "--config", configFile, ...extraArgs],
      {
        cwd: ROOT,
        env: { ...process.env, ...group.env },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    let output = "";
    child.stdout.on("data", (d) => (output += d));
    child.stderr.on("data", (d) => (output += d));
    child.on("close", (code) => {
      const stats = parseStats(output);
      process.stdout.write(
        `${code === 0 ? "✔" : "✖"} ${group.name}: ` +
          `${stats.passing} passing` +
          (stats.failing ? `, ${stats.failing} failing` : "") +
          (stats.pending ? `, ${stats.pending} pending` : "") +
          "\n",
      );
      resolve({ group, code, output, stats });
    });
  });
}

function parseStats(output) {
  const match = (re) => Number((output.match(re) || [])[1] || 0);
  return {
    passing: match(/(\d+) passing/),
    failing: match(/(\d+) failing/),
    pending: match(/(\d+) pending/),
  };
}

function reportAndExit(results, elapsed) {
  const totals = results.reduce(
    (acc, { stats }) => {
      acc.passing += stats.passing;
      acc.failing += stats.failing;
      acc.pending += stats.pending;
      return acc;
    },
    { passing: 0, failing: 0, pending: 0 },
  );
  const failed = results.filter((r) => r.code !== 0 || r.stats.failing);

  for (const result of failed) {
    process.stdout.write(`\n${"─".repeat(60)}\n${result.group.name}\n`);
    process.stdout.write(result.output);
  }

  process.stdout.write(
    `\n${totals.passing} passing` +
      (totals.failing ? `, ${totals.failing} failing` : "") +
      (totals.pending ? `, ${totals.pending} pending` : "") +
      ` (${(elapsed / 1000).toFixed(1)}s)\n`,
  );

  process.exit(failed.length ? 1 : 0);
}
