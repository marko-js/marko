// Extract per-run generations from a workflow journal.
// Matches each agent transcript's prompt back to its unit by exact string equality;
// replicate units share a prompt and are assigned in encounter order (exchangeable).
// Usage: node harness/extract-journal.mjs <workflowDir> <unitsFile> <outFile>
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [wfDir, unitsFile, outFile] = process.argv.slice(2);
const units = JSON.parse(await readFile(unitsFile, "utf8"));

// journal: agentId -> result, in completion order
const results = new Map();
for (const line of (await readFile(path.join(wfDir, "journal.jsonl"), "utf8")).split("\n")) {
  if (!line.trim()) continue;
  const entry = JSON.parse(line);
  if (entry.type === "result") results.set(entry.agentId, entry.result);
}

// agent transcripts: agentId -> exact prompt text
function collectStrings(node, out) {
  if (typeof node === "string") {
    if (node.includes("# Task:")) out.push(node);
  } else if (Array.isArray(node)) {
    for (const x of node) collectStrings(x, out);
  } else if (node && typeof node === "object") {
    for (const v of Object.values(node)) collectStrings(v, out);
  }
}

const prompts = new Map(); // agentId -> prompt
for (const f of await readdir(wfDir)) {
  const m = f.match(/^agent-([a-z0-9]+)\.jsonl$/);
  if (!m) continue;
  const raw = await readFile(path.join(wfDir, m[1] ? path.basename(f) : f), "utf8");
  for (const line of raw.split("\n")) {
    if (!line.includes("# Task:")) continue;
    try {
      const found = [];
      collectStrings(JSON.parse(line), found);
      if (found.length) {
        prompts.set(m[1], found.sort((a, b) => b.length - a.length)[0]);
        break;
      }
    } catch {}
  }
}

// prompt -> queue of units
const queues = new Map();
for (const u of units) {
  if (!queues.has(u.prompt)) queues.set(u.prompt, []);
  queues.get(u.prompt).push(u);
}

const generations = [];
const claimed = new Set();
for (const agentId of results.keys()) {
  const prompt = prompts.get(agentId);
  const queue = prompt != null ? queues.get(prompt) : null;
  const unit = queue?.find((u) => !claimed.has(u.runId));
  if (!unit) continue;
  claimed.add(unit.runId);
  generations.push({
    runId: unit.runId,
    taskId: unit.taskId,
    condition: unit.condition,
    rep: unit.rep,
    stage: unit.stage,
    agentId,
    files: results.get(agentId)?.files || null,
  });
}
for (const u of units) {
  if (!claimed.has(u.runId)) {
    generations.push({ runId: u.runId, taskId: u.taskId, condition: u.condition, rep: u.rep, stage: u.stage, agentId: null, files: null });
  }
}

generations.sort((a, b) => a.runId.localeCompare(b.runId));
await writeFile(outFile, JSON.stringify(generations, null, 2));
const missing = generations.filter((g) => !g.files);
console.log(`${generations.length} generations (${missing.length} missing) -> ${outFile}`);
if (missing.length) console.log("missing:", missing.map((g) => g.runId).join(", "));
