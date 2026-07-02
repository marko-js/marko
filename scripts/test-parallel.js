// Runs the mocha suite across CPU cores. The ~800-fixture snapshot suite in
// `runtime-tags/.../main.test.ts` dominates the runtime and is embarrassingly
// parallel, but mocha runs a single file in one process. This splits that file
// into round-robin "slots" (see `MARKO_TEST_SLOT_*` in main.test.ts) and packs
// those slots plus every other spec file into one mocha process per core.
//
// A plain `npm test` is untouched — it stays serial, which is what a scoped
// `--grep` dev run wants. This is the "run everything, fast" path used by CI.
//
// Plain CommonJS on purpose: this orchestrator is what `c8` wraps for coverage,
// and loading the `~ts` babel-register hook in that process breaks c8's report
// step. The mocha workers it spawns still get `~ts` via `.mocharc.parallel.json`.
//
// Usage: node scripts/test-parallel.js [extra mocha args...]
//        MARKO_TEST_WORKERS=8 node scripts/test-parallel.js
const { spawn } = require("node:child_process");
const os = require("node:os");
const path = require("node:path");

const glob = require("tiny-glob");

const ROOT = path.resolve(__dirname, "..");
const MOCHA = path.join(ROOT, "node_modules/.bin/mocha");
const CONFIG = path.join(ROOT, ".mocharc.parallel.json");
const SPEC_GLOB = "packages/*/@(src|test)/**/*.test.@(js|ts)";
// The one giant fixture file that gets split across workers via slots.
const FIXTURE_FILE = path.join(
  ROOT,
  "packages/runtime-tags/src/__tests__/main.test.ts",
);

const WORKERS = Math.max(
  1,
  Number(process.env.MARKO_TEST_WORKERS) || os.availableParallelism(),
);
// Many slots per worker (not one) so the packer can hand a worker that also
// carries a slow spec file proportionally fewer fixtures. Slots are just env
// numbers — more of them costs nothing (still one process per worker), it only
// makes the balance finer-grained.
const SLOT_TOTAL = WORKERS * 16;

// Rough wall-time hints (ms) used only to balance workers — a wrong guess makes
// the run slightly less even, never changes which tests run or their outcome.
// The fixture suite is the bulk; a handful of runtime-class browser suites are
// the only other heavyweights, so everything else shares one small default.
const FIXTURE_TOTAL_MS = 210_000;
const FILE_COST_HINTS = [
  ["/components-browser/", 45_000],
  ["/components-pages/", 14_000],
  ["/render/", 12_000],
  ["/translator/", 5_000],
];

main(process.argv.slice(2)).catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main(mochaArgs) {
  const files = (
    await glob(SPEC_GLOB, { cwd: ROOT, absolute: true, filesOnly: true })
  ).filter((f) => !f.includes("node_modules"));
  const hasFixtures = files.includes(FIXTURE_FILE);
  const otherFiles = files.filter((f) => f !== FIXTURE_FILE);

  const bins = packBins(hasFixtures ? SLOT_TOTAL : 0, otherFiles);
  const started = Date.now();
  console.log(
    `Running ${files.length} spec files across ${bins.length} workers ` +
      `(${WORKERS} cores)…\n`,
  );

  const results = await Promise.all(
    bins.map((bin, i) => runBin(bin, i, mochaArgs)),
  );

  let passing = 0;
  let failing = 0;
  let failed = false;
  for (const r of results) {
    passing += r.passing;
    failing += r.failing;
    if (r.code !== 0 || r.failing) {
      failed = true;
      process.stdout.write(r.output); // surface the full failure detail
    }
  }

  const secs = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `\n${passing} passing, ${failing} failing across ${bins.length} ` +
      `workers in ${secs}s`,
  );
  process.exit(failed ? 1 : 0);
}

// Longest-processing-time bin packing: sort the tasks (fixture slots + spec
// files) heaviest-first and drop each onto the currently-lightest worker.
function packBins(slotTotal, otherFiles) {
  const slotCost = slotTotal ? FIXTURE_TOTAL_MS / slotTotal : 0;
  const tasks = [];
  for (let slot = 0; slot < slotTotal; slot++)
    tasks.push({ slot, cost: slotCost });
  for (const file of otherFiles) tasks.push({ file, cost: fileCost(file) });
  tasks.sort((a, b) => b.cost - a.cost);

  const bins = Array.from({ length: WORKERS }, () => ({
    slots: [],
    files: [],
    cost: 0,
  }));
  for (const task of tasks) {
    const bin = bins.reduce((a, b) => (b.cost < a.cost ? b : a));
    if (task.slot !== undefined) bin.slots.push(task.slot);
    else bin.files.push(task.file);
    bin.cost += task.cost;
  }
  return bins.filter((bin) => bin.slots.length || bin.files.length);
}

function fileCost(file) {
  for (const [fragment, ms] of FILE_COST_HINTS) {
    if (file.includes(fragment)) return ms;
  }
  return 2_000;
}

function runBin(bin, index, mochaArgs) {
  const args = [MOCHA, "--config", CONFIG, "--reporter", "dot", ...mochaArgs];
  const env = { ...process.env };
  if (bin.slots.length) {
    args.push(FIXTURE_FILE);
    env.MARKO_TEST_SLOTS = bin.slots.join(",");
    env.MARKO_TEST_SLOT_TOTAL = String(SLOT_TOTAL);
  }
  args.push(...bin.files);

  const child = spawn(process.execPath, args, { cwd: ROOT, env });
  let output = "";
  child.stdout.on("data", (d) => (output += d));
  child.stderr.on("data", (d) => (output += d));

  return new Promise((resolve) => {
    child.on("close", (code) => {
      const passing = Number(/(\d+) passing/.exec(output)?.[1] ?? 0);
      const failing = Number(/(\d+) failing/.exec(output)?.[1] ?? 0);
      const label = bin.slots.length
        ? `fixtures[${bin.slots.length}/${SLOT_TOTAL}]${bin.files.length ? ` +${bin.files.length} files` : ""}`
        : `${bin.files.length} files`;
      console.log(
        `  worker ${index + 1}: ${label} — ${passing} passing` +
          (failing ? `, ${failing} failing` : ""),
      );
      resolve({ code, passing, failing, output });
    });
  });
}
