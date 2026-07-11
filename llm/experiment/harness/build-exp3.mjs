// Experiment 3: build per-condition units + materialize per-chain app dirs with
// on-disk cheat sheets. Usage: node harness/build-exp3.mjs
import { readFile, writeFile, mkdir, cp, rm } from "node:fs/promises";
import path from "node:path";
import { ROOT, materialize } from "./lib.mjs";

const RUN_TASKS = new Set(["t6-layout", "t7-products", "t8-guestbook", "h3-admin"]);
const evidenceSrc = JSON.parse(await readFile(path.join(ROOT, "runs/exp2/broken-apps-armB2.json"), "utf8")).runs;
const marko6Sheet = await readFile(path.join(ROOT, "cheatsheets/v5/marko6.md"), "utf8");
const runSheet = await readFile(path.join(ROOT, "cheatsheets/v5/marko-run.md"), "utf8");

const MARKO_PTR = "Marko 6 syntax reference: node_modules/marko/llms.md";
const RUN_PTR = "@marko/run routing reference: node_modules/@marko/run/llms.md";
const MARKO_PTR_IMP = "Fix guide: READ node_modules/marko/llms.md (Marko 6 syntax) before writing your fix.";
const RUN_PTR_IMP = "Also READ node_modules/@marko/run/llms.md (routing, handlers) before changing route files.";
const AGENTS_MD = `# Agent notes

This app uses Marko 6 (tags API) served by @marko/run file-based routing.
Before writing or fixing any .marko file or route, read the short syntax
references shipped with the installed packages:

- node_modules/marko/llms.md (Marko 6 language)
- node_modules/@marko/run/llms.md (routing, handlers, middleware)

They are accurate for the installed versions; trust them over prior knowledge.
`;

const guidance = (r) => (r.guidance ? `\n\nDev server output:\n${r.guidance}` : "");
const baseEvidence = (r) =>
  r.fatal
    ? `Server/compile error:\n${r.fatal.detail}`
    : `Failed checks:\n${r.checks.filter((c) => !c.pass).map((c) => `- ${c.name}${c.detail ? ` (${c.detail})` : ""}`).join("\n")}${guidance(r)}`;

const PROMPT = (r, appDir, { pointer, agentsMd, sheetInPrompt }) => `You are fixing a small web app built with Marko 6 (the \`marko\` package, version 6) and served by @marko/run's dev server.

<task>
${r.spec.trim()}
</task>

The app's current files are on disk at ${appDir} (its dependencies are installed in its node_modules). You may READ any files in that directory if useful. Do not run any commands or servers.
${agentsMd ? `\nThe project contains an AGENTS.md file with these notes:\n<agents-md>\n${AGENTS_MD.trim()}\n</agents-md>\n` : ""}${sheetInPrompt ? `\nUse the following cheat sheet(s) as your syntax reference. They are accurate for the installed versions — trust them over any prior knowledge of Marko.\n\n<cheatsheet>\n${marko6Sheet.trim()}${RUN_TASKS.has(r.taskId) ? `\n\n${runSheet.trim()}` : ""}\n</cheatsheet>\n` : ""}
A previous attempt did not pass. Here are its files and what went wrong. Fix the problems and return the corrected COMPLETE set of files.

<previous-files>
${r.files.map((f) => `--- ${f.path} ---\n${f.content}`).join("\n")}
</previous-files>

<failure-evidence>
${(baseEvidence(r).slice(0, 3000) + (pointer === "imperative" ? `\n\n${r.fatal ? MARKO_PTR_IMP : `${MARKO_PTR_IMP}\n${RUN_PTR_IMP}`}` : pointer ? `\n\n${r.fatal ? MARKO_PTR : `${MARKO_PTR}\n${RUN_PTR}`}` : "")).trim()}
</failure-evidence>

Return ONLY the structured output: {"files": [{"path": "src/routes/+page.marko", "content": "..."}]} with paths relative to the app root.`;

const CONDITIONS = {
  P0: {},
  P1: { pointer: true },
  P1b: { pointer: "imperative" },
  P2: { agentsMd: true },
  P3: { sheetInPrompt: true },
};

const allUnits = {};
for (const cond of Object.keys(CONDITIONS)) allUnits[cond] = [];

for (const r of evidenceSrc) {
  if (r.pass || !r.files?.length) continue;
  const spec = await readFile(path.join(ROOT, "tasks", r.taskId, "spec.md"), "utf8");
  const full = { ...r, spec };
  for (const [cond, opts] of Object.entries(CONDITIONS)) {
    const appDir = path.join(ROOT, "runs/exp3/apps", cond, r.runId);
    // materialize broken app + given files + on-disk sheets (+ AGENTS.md for P2)
    await materialize(appDir, r.files);
    const givenDir = path.join(ROOT, "tasks", r.taskId, "given");
    await cp(givenDir, appDir, { recursive: true, force: true }).catch(() => {});
    await mkdir(path.join(appDir, "node_modules/marko"), { recursive: true });
    await mkdir(path.join(appDir, "node_modules/@marko/run"), { recursive: true });
    await writeFile(path.join(appDir, "node_modules/marko/llms.md"), marko6Sheet);
    await writeFile(path.join(appDir, "node_modules/@marko/run/llms.md"), runSheet);
    if (opts.agentsMd) await writeFile(path.join(appDir, "AGENTS.md"), AGENTS_MD);
    for (let i = 1; i <= 2; i++) {
      allUnits[cond].push({
        runId: `${r.runId}.${cond}.s${i}`,
        taskId: r.taskId,
        condition: cond,
        rep: i,
        stage: "repair",
        prompt: PROMPT(full, appDir, opts),
      });
    }
  }
}

for (const [cond, units] of Object.entries(allUnits)) {
  const dir = path.join(ROOT, "runs/exp3", cond);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "units.json"), JSON.stringify(units, null, 1));
  console.log(cond, units.length, "units");
}
