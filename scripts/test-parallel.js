// Runs the mocha suite across CPU cores. A few giant fixture-driven suites
// dominate the runtime and are embarrassingly parallel, but mocha runs a
// single file in one process. Those suites slice themselves round-robin by
// slot (see `MARKO_TEST_SLOT_*` in runtime-tags' main.test.ts and the
// mocha-autotest patch), so worker N loads every sliced file but runs only
// slot N of their fixtures, plus every Nth of the remaining spec files.
//
// A plain `pnpm test` is untouched — it stays serial, which is what a scoped
// `--grep` dev run wants. This is the "run everything, fast" path used by CI.
//
// Plain CommonJS because it needs no types and is spawned directly by `node`;
// the mocha workers it spawns get `~ts` via `.mocharc.parallel.json`.
//
// Usage: node scripts/test-parallel.js [extra mocha args...]
//        MARKO_TEST_WORKERS=8 node scripts/test-parallel.js
const { spawn } = require("node:child_process");
const os = require("node:os");
const path = require("node:path");

const glob = require("tiny-glob");

const ROOT = path.resolve(__dirname, "..");
const MOCHA = require.resolve("mocha/bin/mocha.js");
const CONFIG = path.join(ROOT, ".mocharc.parallel.json");
const SPEC_GLOB = "packages/*/@(src|test)/**/*.test.@(js|ts)";

// Suites big enough that handing a whole file to one worker would make it the
// long pole. runtime-tags' main.test.ts slices itself via `MARKO_TEST_SLOT_*`;
// the runtime-class suites are mocha-autotest based and additionally opt in
// via `MARKO_TEST_SLICE_SUITES` (the basename of each suite directory).
const SLICED_FILES = [
  "packages/runtime-tags/src/__tests__/main.test.ts",
  "packages/runtime-class/test/components-browser/index.test.js",
  "packages/runtime-class/test/components-pages/index.test.js",
  "packages/runtime-class/test/render/index.test.js",
  "packages/runtime-class/test/translator/index.test.js",
];
const SLICE_SUITES = SLICED_FILES.filter((f) => f.includes("/runtime-class/"))
  .map((f) => path.basename(path.dirname(f)))
  .join(",");

const WORKERS = Math.max(
  1,
  Number(process.env.MARKO_TEST_WORKERS) || os.availableParallelism(),
);

main(process.argv.slice(2)).catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main(mochaArgs) {
  const files = (
    await glob(SPEC_GLOB, { cwd: ROOT, absolute: true, filesOnly: true })
  ).filter((f) => !f.includes("node_modules"));
  const slicedFiles = SLICED_FILES.map((f) => path.join(ROOT, f)).filter((f) =>
    files.includes(f),
  );
  const otherFiles = files.filter((f) => !slicedFiles.includes(f));

  const started = Date.now();
  console.log(
    `Running ${files.length} spec files across ${WORKERS} workers ` +
      `(${os.availableParallelism()} cores)…\n`,
  );

  const results = await Promise.all(
    Array.from({ length: WORKERS }, (_, slot) =>
      runWorker(
        slot,
        slicedFiles,
        otherFiles.filter((_, i) => i % WORKERS === slot),
        mochaArgs,
      ),
    ),
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
      ` across ${WORKERS} workers in ${secs}s`,
  );
}

function runWorker(slot, slicedFiles, files, mochaArgs) {
  // `--exit` so a stray timer/handle leaked by a test can't wedge the worker
  // (and with it the whole run) after its suite finishes.
  const args = [MOCHA, "--config", CONFIG, "--reporter", "dot", "--exit"];
  args.push(...mochaArgs, ...slicedFiles, ...files);
  const env = {
    ...process.env,
    MARKO_TEST_SLOTS: String(slot),
    MARKO_TEST_SLOT_TOTAL: String(WORKERS),
    MARKO_TEST_SLICE_SUITES: SLICE_SUITES,
  };

  const started = Date.now();
  const child = spawn(process.execPath, args, { cwd: ROOT, env });
  let output = "";
  child.stdout.on("data", (d) => (output += d));
  child.stderr.on("data", (d) => (output += d));

  return new Promise((resolve) => {
    child.on("error", (err) => {
      output += `\nworker ${slot + 1} failed to spawn: ${err.stack ?? err}\n`;
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
      console.log(
        `  worker ${slot + 1}: slice + ${files.length} files — ` +
          `${passing} passing` +
          (failing ? `, ${failing} failing` : "") +
          (crashed ? `, crashed (exit code ${code})` : "") +
          ` in ${secs}s`,
      );
      resolve({ code, passing, failing, crashed, output });
    }
  });
}
