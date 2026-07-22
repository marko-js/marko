// Parallel c8 coverage reporter.
//
// `c8 report` does two things: it merges the raw V8 coverage that every test
// worker dumped (fast), then remaps each covered script back through its
// source map with v8-to-istanbul (slow — ~90% of the wall time, and single
// threaded). On CI that remap leaves every core but one idle for ~40s.
//
// This splits only the remap across worker processes. Each worker re-runs the
// (deterministic) V8 merge itself, then converts just its round-robin slice of
// the merged scripts; the parent unions the partial Istanbul maps and writes
// the real reports. The merge is cheap enough (~2s) to repeat per worker, and
// keeping every script fully merged *before* it is converted means the numbers
// are byte-for-byte identical to serial `c8 report` — unlike naively sharding
// the raw coverage files, which splits a script's ranges and skews branch/
// function counts.
//
// Usage: node scripts/coverage-report.js
//        COVERAGE_REPORT_WORKERS=4 node scripts/coverage-report.js
const os = require("node:os");
const path = require("node:path");
const fs = require("node:fs");
const { fork } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const C8_PKG = require.resolve("c8/package.json", { paths: [ROOT] });
const C8_DIR = path.dirname(C8_PKG);
const Report = require(path.join(C8_DIR, "lib", "report.js"));
const fromC8 = (name) => require(require.resolve(name, { paths: [C8_DIR] }));
const libCoverage = fromC8("istanbul-lib-coverage");
const libReport = fromC8("istanbul-lib-report");
const reports = fromC8("istanbul-reports");
const v8toIstanbul = fromC8("v8-to-istanbul");

const TEMP_DIR = path.join(ROOT, "coverage", "tmp");
const REPORTS_DIR = path.join(ROOT, "coverage");

// .c8rc.json stays the single source of truth for what's covered; the report
// options c8 doesn't take from the rc are filled with the same defaults c8's
// CLI uses, so the workers convert exactly what `c8 report` would.
const RC = JSON.parse(fs.readFileSync(path.join(ROOT, ".c8rc.json"), "utf8"));
const REPORTERS = [].concat(RC.reporter);

function makeReport() {
  return new Report({
    tempDirectory: TEMP_DIR,
    reporter: REPORTERS,
    reportsDirectory: REPORTS_DIR,
    all: RC.all,
    src: [ROOT],
    include: RC.include,
    exclude: RC.exclude,
    excludeAfterRemap: RC.excludeAfterRemap,
    resolve: "",
    omitRelative: false,
    wrapperLength: 0,
  });
}

const WORKERS = Math.max(
  1,
  Number(process.env.COVERAGE_REPORT_WORKERS) || os.availableParallelism(),
);

if (process.env.COVERAGE_WORKER_INDEX !== undefined) {
  runWorker(
    Number(process.env.COVERAGE_WORKER_INDEX),
    Number(process.env.COVERAGE_WORKER_TOTAL),
  ).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

// A worker converts every Nth merged script and writes its partial Istanbul
// coverage map to `file`.
async function runWorker(index, total) {
  const report = makeReport();
  const merged = report._getMergedProcessCov();
  const map = libCoverage.createCoverageMap();
  for (let i = index; i < merged.result.length; i += total) {
    const v8ScriptCov = merged.result[i];
    try {
      const sources = report._getSourceMap(v8ScriptCov);
      const scriptPath = path.resolve(report.resolve, v8ScriptCov.url);
      const converter = v8toIstanbul(
        scriptPath,
        report.wrapperLength,
        sources,
        (p) =>
          report.excludeAfterRemap ? !report._shouldInstrument(p) : undefined,
      );
      await converter.load();
      converter.applyCoverage(v8ScriptCov.functions);
      map.merge(converter.toIstanbul());
    } catch {
      // Same as c8: a script that can't be remapped (no source map, excluded
      // after remap, …) is simply dropped from the report.
    }
  }
  fs.writeFileSync(
    process.env.COVERAGE_WORKER_OUT,
    JSON.stringify(map.toJSON()),
  );
}

async function main() {
  if (!fs.existsSync(TEMP_DIR) || !fs.readdirSync(TEMP_DIR).length) {
    console.error(
      `No V8 coverage found in ${path.relative(ROOT, TEMP_DIR)} — did the tests run under c8?`,
    );
    process.exit(1);
  }

  const started = Date.now();
  const partsDir = path.join(REPORTS_DIR, "parts");
  fs.rmSync(partsDir, { recursive: true, force: true });
  fs.mkdirSync(partsDir, { recursive: true });

  const parts = await Promise.all(
    Array.from({ length: WORKERS }, (_, i) => {
      const out = path.join(partsDir, `part-${i}.json`);
      return new Promise((res, rej) => {
        const child = fork(__filename, [], {
          cwd: ROOT,
          env: {
            ...process.env,
            COVERAGE_WORKER_INDEX: String(i),
            COVERAGE_WORKER_TOTAL: String(WORKERS),
            COVERAGE_WORKER_OUT: out,
          },
          stdio: "inherit",
        });
        child.on("error", rej);
        child.on("exit", (code) =>
          code === 0
            ? res(out)
            : rej(new Error(`coverage worker ${i} exited with code ${code}`)),
        );
      });
    }),
  );

  const map = libCoverage.createCoverageMap();
  for (const part of parts) {
    map.merge(JSON.parse(fs.readFileSync(part, "utf8")));
  }
  fs.rmSync(partsDir, { recursive: true, force: true });

  const context = libReport.createContext({
    dir: REPORTS_DIR,
    coverageMap: map,
  });
  for (const reporter of REPORTERS) {
    reports.create(reporter).execute(context);
  }

  console.log(
    `\nCoverage report generated in ${((Date.now() - started) / 1000).toFixed(1)}s ` +
      `across ${WORKERS} workers.`,
  );
}
