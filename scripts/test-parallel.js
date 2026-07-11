// Runs the mocha suite across CPU cores. A few giant fixture-driven suites
// dominate the runtime and are embarrassingly parallel, but mocha runs a
// single file in one process. This slices those suites into round-robin
// "slots" (see `MARKO_TEST_SLOT_*` in runtime-tags' main.test.ts and the
// mocha-autotest patch) and packs the slots plus every other spec file into
// one mocha process per core: every slotted worker loads all sliced files but
// only runs its own slice of their fixtures.
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

// Suites big enough to be worth splitting across workers, with rough
// wall-time hints (ms) used only to balance the packing — a wrong guess makes
// the run slightly less even, never changes which tests run or their outcome.
// runtime-tags' main.test.ts slices itself via `MARKO_TEST_SLOT_*`; the
// runtime-class suites are mocha-autotest based and additionally opt in via
// `MARKO_TEST_SLICE_SUITES` (the basename of each suite directory).
const SLICED_FILES = new Map([
  ["packages/runtime-tags/src/__tests__/main.test.ts", 210_000],
  ["packages/runtime-class/test/components-browser/index.test.js", 45_000],
  ["packages/runtime-class/test/components-pages/index.test.js", 14_000],
  ["packages/runtime-class/test/render/index.test.js", 12_000],
  ["packages/runtime-class/test/translator/index.test.js", 5_000],
]);
const SLICE_SUITES = [...SLICED_FILES.keys()]
  .filter((f) => f.includes("/runtime-class/"))
  .map((f) => path.basename(path.dirname(f)))
  .join(",");
// Everything else shares one small default hint.
const DEFAULT_FILE_MS = 2_000;

const WORKERS = Math.max(
  1,
  Number(process.env.MARKO_TEST_WORKERS) || os.availableParallelism(),
);
// Many slots per worker (not one) so the packer can hand a worker that also
// carries a slow spec file proportionally fewer fixtures. Slots are just env
// numbers — more of them costs nothing (still one process per worker), it only
// makes the balance finer-grained.
const SLOT_TOTAL = WORKERS * 16;

main(process.argv.slice(2)).catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main(mochaArgs) {
  const files = (
    await glob(SPEC_GLOB, { cwd: ROOT, absolute: true, filesOnly: true })
  ).filter((f) => !f.includes("node_modules"));
  const slicedFiles = [];
  let slicedTotalMs = 0;
  for (const [file, costMs] of SLICED_FILES) {
    const abs = path.join(ROOT, file);
    if (files.includes(abs)) {
      slicedFiles.push(abs);
      slicedTotalMs += costMs;
    }
  }
  const otherFiles = files.filter((f) => !slicedFiles.includes(f));

  const bins = packBins(
    slicedFiles.length ? SLOT_TOTAL : 0,
    slicedTotalMs,
    otherFiles,
  );
  const started = Date.now();
  console.log(
    `Running ${files.length} spec files across ${bins.length} workers ` +
      `(${os.availableParallelism()} cores)…\n`,
  );

  const results = await Promise.all(
    bins.map((bin, i) => runBin(bin, i, slicedFiles, mochaArgs)),
  );

  let passing = 0;
  let failing = 0;
  let crashed = 0;
  for (const r of results) {
    passing += r.passing;
    failing += r.failing;
    if (r.crashed) crashed++;
    if (r.code !== 0 || r.failing) {
      process.exitCode = 1;
      process.stdout.write(r.output); // surface the full failure detail
    }
  }

  const secs = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `\n${passing} passing` +
      (failing ? `, ${failing} failing` : "") +
      (crashed ? `, ${crashed} worker(s) crashed` : "") +
      ` across ${bins.length} workers in ${secs}s`,
  );
}

// Longest-processing-time bin packing: sort the tasks (sliced-suite slots +
// spec files) heaviest-first and drop each onto the currently-lightest worker.
function packBins(slotTotal, slicedTotalMs, otherFiles) {
  const slotCost = slotTotal ? slicedTotalMs / slotTotal : 0;
  const tasks = [];
  for (let slot = 0; slot < slotTotal; slot++)
    tasks.push({ slot, cost: slotCost });
  for (const file of otherFiles) tasks.push({ file, cost: DEFAULT_FILE_MS });
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

function runBin(bin, index, slicedFiles, mochaArgs) {
  // `--exit` so a stray timer/handle leaked by a test can't wedge the worker
  // (and with it the whole run) after its suite finishes.
  const args = [MOCHA, "--config", CONFIG, "--reporter", "dot", "--exit"];
  args.push(...mochaArgs);
  const env = { ...process.env };
  if (bin.slots.length) {
    args.push(...slicedFiles);
    env.MARKO_TEST_SLOTS = bin.slots.join(",");
    env.MARKO_TEST_SLOT_TOTAL = String(SLOT_TOTAL);
    env.MARKO_TEST_SLICE_SUITES = SLICE_SUITES;
  }
  args.push(...bin.files);

  const started = Date.now();
  const child = spawn(process.execPath, args, { cwd: ROOT, env });
  let output = "";
  child.stdout.on("data", (d) => (output += d));
  child.stderr.on("data", (d) => (output += d));

  return new Promise((resolve) => {
    child.on("error", (err) => {
      output += `\nworker ${index + 1} failed to spawn: ${err.stack ?? err}\n`;
      finish(1);
    });
    child.on("close", finish);

    let done = false;
    function finish(code) {
      if (done) return;
      done = true;
      const passing = Number(/(\d+) passing/.exec(output)?.[1] ?? 0);
      // `mocha-autotest` pulls in `it-fails`, which rewrites mocha's epilogue:
      // real failures print as "N unexpectedly failing" (while "N failing as
      // expected" is *not* a failure), so accept both spellings here.
      const failing = Number(
        /(\d+) (?:unexpectedly )?failing(?! as expected)/.exec(output)?.[1] ??
          0,
      );
      // Non-zero exit with no parsed failures means the worker died without
      // finishing its suite (crash, OOM, load error) — don't let it show up
      // as "0 failing".
      const crashed = code !== 0 && !failing;
      const secs = ((Date.now() - started) / 1000).toFixed(1);
      const label = bin.slots.length
        ? `slices[${bin.slots.length}/${SLOT_TOTAL}]${bin.files.length ? ` +${bin.files.length} files` : ""}`
        : `${bin.files.length} files`;
      console.log(
        `  worker ${index + 1}: ${label} — ${passing} passing` +
          (failing ? `, ${failing} failing` : "") +
          (crashed ? `, crashed (exit code ${code})` : "") +
          ` in ${secs}s`,
      );
      resolve({ code, passing, failing, crashed, output });
    }
  });
}
