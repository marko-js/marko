// Arm S units: one tool-enabled repair round for every frozen sonnet-low
// failure, exp3 P1b-style — broken app on disk with the v8 llms.md sheets in
// node_modules, evidence regenerated under the patched stack, imperative
// fix-guide pointer appended. Usage: node harness/build-exp6s.mjs
import { readFile, writeFile, mkdir, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { ROOT, materialize } from "./lib.mjs";

const RUN_TASKS = new Set(["t6-layout", "t7-products", "t8-guestbook", "t9-headlines", "h3-admin"]);
const MARKO_PTR_IMP = "Fix guide: READ node_modules/marko/llms.md (Marko 6 syntax) before writing your fix.";
const RUN_PTR_IMP = "Also READ node_modules/@marko/run/llms.md (routing, handlers) before changing route files.";

const regrade = JSON.parse(
  await readFile(path.join(ROOT, "runs/exp6-regrade/results.json"), "utf8"),
).runs.filter((r) => r.runId.includes(".sl."));
const marko6Sheet = await readFile(path.join(ROOT, "cheatsheets/v8/marko6.md"), "utf8");
const runSheet = await readFile(path.join(ROOT, "cheatsheets/v8/marko-run.md"), "utf8");

const evidenceOf = (r) =>
  r.fatal
    ? `Server/compile error:\n${r.fatal.detail}`
    : `Failed checks:\n${r.checks
        .filter((c) => !c.pass)
        .map((c) => `- ${c.name}${c.detail ? ` (${c.detail})` : ""}`)
        .join("\n")}${r.guidance ? `\n\nDev server output:\n${r.guidance}` : ""}`;

const PROMPT = (spec, appDir, files, evidence, isRunTask, fatal) => `You are fixing a small web app built with Marko 6 (the \`marko\` package, version 6) and served by @marko/run's dev server.

<task>
${spec.trim()}
</task>

The app's current files are on disk at ${appDir} (its dependencies are installed in its node_modules). You may READ any files in that directory if useful. Do not run any commands or servers.

A previous attempt did not pass. Here are its files and what went wrong. Fix the problems and return the corrected COMPLETE set of files.

<previous-files>
${files.map((f) => `--- ${f.path} ---\n${f.content}`).join("\n")}
</previous-files>

<failure-evidence>
${(evidence.trim().slice(0, 3000) + `\n\n${fatal || !isRunTask ? MARKO_PTR_IMP : `${MARKO_PTR_IMP}\n${RUN_PTR_IMP}`}`).trim()}
</failure-evidence>

Return ONLY the structured output: {"files": [{"path": "src/routes/+page.marko", "content": "..."}]} with paths relative to the app root.`;

const units = [];
for (const r of regrade) {
  const spec = await readFile(path.join(ROOT, "tasks", r.taskId, "spec.md"), "utf8");
  const appDir = path.join(ROOT, "runs/exp6/apps-s", r.runId);
  const baseDir = path.join(ROOT, "tasks", r.taskId, r.baseVariant || "base");
  if (existsSync(baseDir)) {
    await cp(baseDir, appDir, { recursive: true, force: true });
    await materialize(appDir, r.files, { clean: false });
  } else {
    await materialize(appDir, r.files);
    const givenDir = path.join(ROOT, "tasks", r.taskId, "given");
    if (existsSync(givenDir)) await cp(givenDir, appDir, { recursive: true, force: true });
  }
  await mkdir(path.join(appDir, "node_modules/marko"), { recursive: true });
  await mkdir(path.join(appDir, "node_modules/@marko/run"), { recursive: true });
  await writeFile(path.join(appDir, "node_modules/marko/llms.md"), marko6Sheet);
  await writeFile(path.join(appDir, "node_modules/@marko/run/llms.md"), runSheet);
  for (let rep = 1; rep <= 2; rep++) {
    units.push({
      runId: `${r.runId}.S.fix${rep}`,
      taskId: r.taskId,
      condition: "S",
      rep,
      stage: "repair",
      baseVariant: r.baseVariant,
      prompt: PROMPT(spec, appDir, r.files, evidenceOf(r), RUN_TASKS.has(r.taskId), !!r.fatal),
    });
  }
}

await writeFile(path.join(ROOT, "runs/exp6/units-s.json"), JSON.stringify(units, null, 1));
console.log(`${units.length} S units across ${regrade.length} chains`);
