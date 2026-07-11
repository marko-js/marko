// Build the run units (prompts) for a round.
// Usage: node harness/build-prompts.mjs <round> <sheetVersion|none> <tasks...> [--reps N] [--conditions C0,C1] [--repair <resultsFile>]
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ROOT } from "./lib.mjs";

const RUN_TASKS = new Set(["t6-layout", "t7-products", "t8-guestbook", "h3-admin"]);

const args = process.argv.slice(2);
const round = args[0];
const sheetVersion = args[1];
const flags = {};
const tasks = [];
for (let i = 2; i < args.length; i++) {
  if (args[i] === "--reps") flags.reps = Number(args[++i]);
  else if (args[i] === "--repstart") flags.repstart = Number(args[++i]);
  else if (args[i] === "--conditions") flags.conditions = args[++i].split(",");
  else if (args[i] === "--repair") flags.repair = args[++i];
  else tasks.push(args[i]);
}
const reps = flags.reps ?? 2;
const conditions = flags.conditions ?? ["C0", "C1"];

const WRAPPER = (spec, sheets) => `You are writing code for a small web app built with Marko 6 (the \`marko\` package, version 6) and served by @marko/run's dev server.

<task>
${spec.trim()}
</task>
${sheets ? `
Use the following cheat sheet(s) as your syntax reference. They are accurate for Marko 6 — trust them over any prior knowledge of Marko, which may describe older incompatible versions.

<cheatsheet>
${sheets.trim()}
</cheatsheet>
` : ""}
Write the complete contents of every file needed to satisfy the task. Do not include files the task says already exist. Use plain JavaScript (not TypeScript). Produce the answer directly from this prompt without using any tools. Return ONLY the structured output: {"files": [{"path": "src/routes/+page.marko", "content": "..."}]} with paths relative to the app root.`;

const REPAIR_WRAPPER = (spec, sheets, files, evidence) => `${WRAPPER(spec, sheets)}

A previous attempt did not pass. Here are its files and what went wrong. Fix the problems and return the corrected COMPLETE set of files (same structured output format).

<previous-files>
${files.map((f) => `--- ${f.path} ---\n${f.content}`).join("\n")}
</previous-files>

<failure-evidence>
${evidence.trim().slice(0, 3000)}
</failure-evidence>`;

async function sheetsFor(taskId) {
  if (sheetVersion === "none") return null;
  const dir = path.join(ROOT, "cheatsheets", sheetVersion);
  let text = await readFile(path.join(dir, "marko6.md"), "utf8");
  if (RUN_TASKS.has(taskId)) {
    text += "\n\n" + (await readFile(path.join(dir, "marko-run.md"), "utf8"));
  }
  return text;
}

const units = [];
if (flags.repair) {
  // Repair mode: one unit per failed run in the results file.
  const results = JSON.parse(await readFile(flags.repair, "utf8"));
  for (const r of results.runs) {
    if (r.pass || !r.files?.length) continue;
    const spec = await readFile(path.join(ROOT, "tasks", r.taskId, "spec.md"), "utf8");
    const sheets = r.condition === "C1" ? await sheetsFor(r.taskId) : null;
    const evidence = r.fatal
      ? `Server/compile error:\n${r.fatal.detail}`
      : `Failed checks:\n${r.checks.filter((c) => !c.pass).map((c) => `- ${c.name}${c.detail ? ` (${c.detail})` : ""}`).join("\n")}`;
    units.push({
      runId: `${r.runId}-fix`,
      taskId: r.taskId,
      condition: r.condition,
      rep: r.rep,
      stage: "repair",
      prompt: REPAIR_WRAPPER(spec, sheets, r.files, evidence),
    });
  }
} else {
  for (const taskId of tasks) {
    const spec = await readFile(path.join(ROOT, "tasks", taskId, "spec.md"), "utf8");
    for (const condition of conditions) {
      const sheets = condition === "C1" ? await sheetsFor(taskId) : null;
      const repstart = flags.repstart ?? 1;
      for (let rep = repstart; rep < repstart + reps; rep++) {
        units.push({
          runId: `${taskId}.${condition}.r${rep}`,
          taskId,
          condition,
          rep,
          stage: "first",
          prompt: WRAPPER(spec, sheets),
        });
      }
    }
  }
}

const outDir = path.join(ROOT, "runs", round);
await mkdir(outDir, { recursive: true });
const outFile = path.join(outDir, flags.repair ? "units-repair.json" : "units.json");
await writeFile(outFile, JSON.stringify(units, null, 2));
console.log(`${units.length} units -> ${outFile}`);
