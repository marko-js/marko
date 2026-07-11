// Build edit-task units: spec + the app's full source in the prompt; subjects
// return only the files they create or change.
// Usage: node harness/build-edit.mjs <round> <tasks...> [--reps N] [--conditions C0,C1,C0d]
// C0 = app only; C1 = app + v7 sheets; C0d = degraded app variant, no sheets
// (skipped for tasks without a base-degraded/ dir).
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ROOT } from "./lib.mjs";

const args = process.argv.slice(2);
const round = args[0];
const flags = { reps: 3, conditions: ["C0", "C1"] };
const tasks = [];
for (let i = 1; i < args.length; i++) {
  if (args[i] === "--reps") flags.reps = Number(args[++i]);
  else if (args[i] === "--conditions") flags.conditions = args[++i].split(",");
  else tasks.push(args[i]);
}

const sheets =
  (await readFile(path.join(ROOT, "cheatsheets/v7/marko6.md"), "utf8")) +
  "\n\n" +
  (await readFile(path.join(ROOT, "cheatsheets/v7/marko-run.md"), "utf8"));

const PROMPT = (spec, files, withSheets) => `You are modifying an existing small web app built with Marko 6 (the \`marko\` package, version 6) and served by @marko/run's dev server (file-based routes under src/routes/; dependencies are already installed).

<task>
${spec.trim()}
</task>

The app's complete current source files:

<app-files>
${files.map((f) => `--- ${f.path} ---\n${f.content}`).join("\n")}
</app-files>
${withSheets ? `\nUse the following cheat sheet(s) as your syntax reference. They are accurate for the installed versions — trust them over any prior knowledge of Marko.\n\n<cheatsheet>\n${sheets.trim()}\n</cheatsheet>\n` : ""}
Modify the app to satisfy the task. Return ONLY the files you create or change, each with its COMPLETE new contents; do not return unchanged files. Use plain JavaScript (not TypeScript). Produce the answer directly from this prompt without using any tools. Return ONLY the structured output: {"files": [{"path": "src/routes/+page.marko", "content": "..."}]} with paths relative to the app root.`;

async function appFiles(dir) {
  const out = [];
  const walk = async (d) => {
    const entries = (await readdir(path.join(dir, d || "."), { withFileTypes: true })).sort(
      (a, b) => a.name.localeCompare(b.name),
    );
    for (const ent of entries) {
      const rel = d ? path.join(d, ent.name) : ent.name;
      if (ent.isDirectory()) await walk(rel);
      else out.push({ path: rel, content: await readFile(path.join(dir, rel), "utf8") });
    }
  };
  await walk("");
  return out;
}

const units = [];
for (const taskId of tasks) {
  const spec = await readFile(path.join(ROOT, "tasks", taskId, "spec.md"), "utf8");
  for (const condition of flags.conditions) {
    const baseVariant =
      { C0d: "base-degraded", C0c: "base-const" }[condition] || "base";
    let files;
    try {
      files = await appFiles(path.join(ROOT, "tasks", taskId, baseVariant));
    } catch {
      continue; // condition's app variant does not exist for this task
    }
    for (let rep = 1; rep <= flags.reps; rep++) {
      units.push({
        runId: `${taskId}.${condition}.r${rep}`,
        taskId,
        condition,
        rep,
        stage: "edit",
        baseVariant,
        prompt: PROMPT(spec, files, condition === "C1"),
      });
    }
  }
}

const outDir = path.join(ROOT, "runs", round);
await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "units.json"), JSON.stringify(units, null, 1));
console.log(`${units.length} units -> ${path.join(outDir, "units.json")}`);
