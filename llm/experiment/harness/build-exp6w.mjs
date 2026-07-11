// Arm W units: paired repair prompts for the 7 frozen let-derive chains.
// W0 = evidence as originally graded (silent checks); W1 = evidence regraded
// under the patched stack (same checks + the [marko] warning guidance line).
// Usage: node harness/build-exp6w.mjs
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ROOT } from "./lib.mjs";

const CHAINS = [
  ["e1-filter.C0.r1", "runs/exp4/results.json"],
  ["e1-filter.C0.r3", "runs/exp4/results.json"],
  ["e1-filter.C0c.r1", "runs/exp4b/results.json"],
  ["e1-filter.C0c.r2", "runs/exp4b/results.json"],
  ["e1-filter.C0c.r4", "runs/exp4b/results.json"],
  ["e1-filter.C0.sl.r1", "runs/exp5/results-sl.json"],
  ["e1-filter.C0.sl.r2", "runs/exp5/results-sl.json"],
];

const regrade = JSON.parse(
  await readFile(path.join(ROOT, "runs/exp6-regrade/results.json"), "utf8"),
).runs;
const spec = await readFile(path.join(ROOT, "tasks/e1-filter/spec.md"), "utf8");

const evidenceOf = (r) =>
  r.fatal
    ? `Server/compile error:\n${r.fatal.detail}`
    : `Failed checks:\n${r.checks
        .filter((c) => !c.pass)
        .map((c) => `- ${c.name}${c.detail ? ` (${c.detail})` : ""}`)
        .join("\n")}${r.guidance ? `\n\nDev server output:\n${r.guidance}` : ""}`;

const PROMPT = (files, evidence) => `You are fixing a small web app built with Marko 6 (the \`marko\` package, version 6) and served by @marko/run's dev server.

<task>
${spec.trim()}
</task>

A previous attempt did not pass. Here are its files and what went wrong. Fix the problems and return the corrected COMPLETE set of files. Use plain JavaScript (not TypeScript). Produce the answer directly from this prompt without using any tools. Return ONLY the structured output: {"files": [{"path": "src/routes/+page.marko", "content": "..."}]} with paths relative to the app root.

<previous-files>
${files.map((f) => `--- ${f.path} ---\n${f.content}`).join("\n")}
</previous-files>

<failure-evidence>
${evidence.trim().slice(0, 3000)}
</failure-evidence>`;

const units = [];
for (const [runId, resultsFile] of CHAINS) {
  const orig = JSON.parse(
    await readFile(path.join(ROOT, resultsFile), "utf8"),
  ).runs.find((r) => r.runId === runId);
  const fresh = regrade.find((r) => r.runId === runId);
  for (const [arm, source] of [
    ["W0", orig],
    ["W1", fresh],
  ]) {
    for (let rep = 1; rep <= 2; rep++) {
      units.push({
        runId: `${runId}.${arm}.fix${rep}`,
        taskId: "e1-filter",
        condition: arm,
        rep,
        stage: "repair",
        baseVariant: orig.baseVariant || "base",
        prompt: PROMPT(orig.files, evidenceOf(source)),
      });
    }
  }
}

await mkdir(path.join(ROOT, "runs/exp6"), { recursive: true });
await writeFile(
  path.join(ROOT, "runs/exp6/units-w.json"),
  JSON.stringify(units, null, 1),
);
console.log(`${units.length} W units`);
const w1 = units.find((u) => u.condition === "W1");
console.log(
  "W1 evidence includes warning:",
  /\[marko\] warning/.test(w1.prompt),
);
