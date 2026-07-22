// Coverage entry point for `@ci:test`.
//
// This is just `@ci:test:fast` with V8 coverage turned on: it sets
// NODE_V8_COVERAGE so every test worker dumps raw coverage, runs the identical
// suite, then hands the (single-threaded, ~40s on CI) merge+remap off to
// scripts/coverage-report.js, which spreads the remap across the cores that
// `c8 report` would leave idle. The text-summary + lcov are byte-for-byte
// identical to `c8 report`.
//
// The suite is run via `pnpm run @ci:test:fast` rather than a bare
// `node scripts/test-parallel.js` on purpose: the compiler resolves phantom
// workspace translator deps (e.g. `marko/translator`) relative to the process
// tree pnpm sets up, and launching the runner outside that tree makes the
// resolution fail on some Node versions. NODE_V8_COVERAGE is set directly here
// rather than through cross-env, which drops it before the workers see it.
//
// Usage: node scripts/test-coverage.js [extra mocha args…]
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const TEMP_DIR = path.join(ROOT, "coverage", "tmp");

const env = { ...process.env, NODE_V8_COVERAGE: TEMP_DIR };

// Fresh temp dir so a previous run's coverage can't leak into this report.
fs.rmSync(TEMP_DIR, { recursive: true, force: true });
fs.mkdirSync(TEMP_DIR, { recursive: true });

const pnpm = process.env.npm_execpath;
const testArgs = ["run", "@ci:test:fast", ...process.argv.slice(2)];
const test = pnpm
  ? spawnSync(process.execPath, [pnpm, ...testArgs], {
      cwd: ROOT,
      env,
      stdio: "inherit",
    })
  : spawnSync("pnpm", testArgs, { cwd: ROOT, env, stdio: "inherit" });
if (test.status !== 0) process.exit(test.status ?? 1);

const report = spawnSync(
  process.execPath,
  [path.join(ROOT, "scripts", "coverage-report.js")],
  { cwd: ROOT, env: process.env, stdio: "inherit" },
);
process.exit(report.status ?? 1);
