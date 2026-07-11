// Deterministic idiom audit over a generations/results JSON: scans each run's
// RETURNED files (the subject's edit, not the base app) for non-idiomatic
// patterns. Flags are per-run booleans; hand-review anything surprising.
// Usage: node harness/audit-idioms.mjs <resultsFile> [--out audit.json]
import { readFile, writeFile } from "node:fs/promises";

const input = process.argv[2];
const outFile = process.argv.includes("--out")
  ? process.argv[process.argv.indexOf("--out") + 1]
  : input.replace(/\.json$/, "") + ".audit.json";

const j = JSON.parse(await readFile(input, "utf8"));
const runs = j.runs || j;

const audit = (files) => {
  const marko = files.filter((f) => f.path.endsWith(".marko"));
  const all = files;
  const has = (set, re) => set.some((f) => re.test(f.content));
  return {
    // Imperative DOM escape hatches anywhere in the edit.
    vanillaDom: has(
      all,
      /\bdocument\.(getElementById|querySelector|createElement|body)|window\.addEventListener|\.innerHTML\s*=/,
    ),
    // Input value synced through an event listener instead of a change handler.
    eventSync: all.some(
      (f) => /\bon(Input|Change)\b/.test(f.content) && /\.target\.value/.test(f.content),
    ),
    changeHandler: has(marko, /value:=|valueChange|checkedChange|openChange/),
    // Wrong-dialect markers (React/Marko 5 habits).
    wrongDialect: has(all, /useState|className=|\bon[A-Z]\w*=\{/),
    scriptlet: marko.some((f) => /^\s*\$\s+(const|let|var)\s/m.test(f.content)),
    // In-place mutation of (potentially reactive) state in template files.
    stateMutation: has(marko, /\.push\(|\.splice\(|\.pop\(|\.shift\(/),
    touched: files.map((f) => f.path).sort(),
  };
};

const rows = [];
for (const r of runs) {
  if (!r.files?.length) continue;
  rows.push({ runId: r.runId, taskId: r.taskId, condition: r.condition, pass: r.pass, ...audit(r.files) });
}

await writeFile(outFile, JSON.stringify(rows, null, 1));

const flagNames = ["vanillaDom", "eventSync", "changeHandler", "wrongDialect", "scriptlet", "stateMutation"];
const byCondition = {};
for (const row of rows) {
  const c = (byCondition[row.condition] ??= { n: 0, ...Object.fromEntries(flagNames.map((f) => [f, 0])) });
  c.n++;
  for (const f of flagNames) if (row[f]) c[f]++;
}
console.log(["condition".padEnd(6), "n".padEnd(4), ...flagNames.map((f) => f.padEnd(14))].join(""));
for (const [cond, c] of Object.entries(byCondition)) {
  console.log([cond.padEnd(6), String(c.n).padEnd(4), ...flagNames.map((f) => String(c[f]).padEnd(14))].join(""));
}
console.log(`audit -> ${outFile}`);
