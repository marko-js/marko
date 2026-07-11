// Materialize generated files and grade every run in a round.
// Usage: node harness/grade-round.mjs <round> <generationsFile> [--out results.json]
import { readFile, writeFile, mkdir, cp, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { gradeRun, materialize, closeBrowser, ROOT } from "./lib.mjs";

const round = process.argv[2];
const genFile = process.argv[3];
const outName = process.argv.includes("--out")
  ? process.argv[process.argv.indexOf("--out") + 1]
  : "results.json";

// generations: [{runId, taskId, condition, rep, stage, files|null, tokens?}]
const generations = JSON.parse(await readFile(genFile, "utf8"));

let port = 5100 + Math.floor(Math.random() * 200);
const runs = [];
for (const g of generations) {
  const runDir = path.join(ROOT, "runs", round, "apps", g.runId);
  let result;
  if (!g.files || !g.files.length) {
    result = { pass: false, fatal: { phase: "no-output", detail: "agent returned no files" }, checks: [] };
  } else {
    // Edit tasks lay the app base down first; the subject's returned files win.
    const baseDir = path.join(ROOT, "tasks", g.taskId, g.baseVariant || "base");
    if (existsSync(baseDir)) {
      await rm(runDir, { recursive: true, force: true });
      await cp(baseDir, runDir, { recursive: true });
      await materialize(runDir, g.files, { clean: false });
    } else {
      await materialize(runDir, g.files);
    }
    result = await gradeRun({ taskDir: path.join(ROOT, "tasks", g.taskId), runDir, port: port++ });
  }
  runs.push({ ...g, ...result });
  const mark = result.pass ? "PASS" : "FAIL";
  const why = result.pass
    ? ""
    : result.fatal
      ? ` [${result.fatal.phase}] ${result.fatal.detail.split("\n")[0].slice(0, 110)}`
      : ` [checks] ${result.checks.filter((c) => !c.pass).map((c) => c.name).join(", ").slice(0, 130)}`;
  console.log(`${mark} ${g.runId}${why}`);
}
await closeBrowser();

const outFile = path.join(ROOT, "runs", round, outName);
await writeFile(outFile, JSON.stringify({ round, runs }, null, 2));

// summary table
const cells = {};
for (const r of runs) {
  const key = `${r.taskId}|${r.condition}`;
  (cells[key] ??= { pass: 0, total: 0 }).total++;
  if (r.pass) cells[key].pass++;
}
const tasks = [...new Set(runs.map((r) => r.taskId))];
const conds = [...new Set(runs.map((r) => r.condition))].sort();
console.log(`\n=== ${round} (${outName}) ===`);
console.log(["task".padEnd(16), ...conds.map((c) => c.padEnd(6))].join(""));
for (const t of tasks) {
  const row = [t.padEnd(16)];
  for (const c of conds) {
    const cell = cells[`${t}|${c}`];
    row.push((cell ? `${cell.pass}/${cell.total}` : "-").padEnd(6));
  }
  console.log(row.join(""));
}
for (const c of conds) {
  const all = runs.filter((r) => r.condition === c);
  console.log(`${c} overall: ${all.filter((r) => r.pass).length}/${all.length}`);
}
console.log(`results -> ${outFile}`);
