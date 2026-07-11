// Detect which subjects actually read the on-disk cheat sheet (tool_use containing llms.md).
// Usage: node harness/detect-sheet-reads.mjs <workflowDir> <generationsFile>
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [wfDir, genFile] = process.argv.slice(2);
const generations = JSON.parse(await readFile(genFile, "utf8"));
const byAgent = new Map(generations.map((g) => [g.agentId, g]));

function findToolUses(node, out) {
  if (Array.isArray(node)) { for (const x of node) findToolUses(x, out); return; }
  if (node && typeof node === "object") {
    if (node.type === "tool_use" && node.input) out.push(node);
    for (const v of Object.values(node)) findToolUses(v, out);
  }
}

const reads = {};
for (const f of await readdir(wfDir)) {
  const m = f.match(/^agent-([a-z0-9]+)\.jsonl$/);
  if (!m || !byAgent.has(m[1])) continue;
  const g = byAgent.get(m[1]);
  let sheetRead = false, toolCalls = 0;
  for (const line of (await readFile(path.join(wfDir, f), "utf8")).split("\n")) {
    if (!line.trim()) continue;
    let entry; try { entry = JSON.parse(line); } catch { continue; }
    const uses = [];
    findToolUses(entry, uses);
    for (const u of uses) {
      if (u.name === "StructuredOutput") continue;
      toolCalls++;
      if (/llms\.md/.test(JSON.stringify(u.input))) sheetRead = true;
    }
  }
  reads[g.runId] = { sheetRead, toolCalls };
}
const out = genFile.replace(/generations\.json$/, "sheet-reads.json");
await writeFile(out, JSON.stringify(reads, null, 1));
const vals = Object.values(reads);
console.log(`${vals.filter((v) => v.sheetRead).length}/${vals.length} read the sheet; ${vals.filter((v) => v.toolCalls > 0).length} used any tool -> ${out}`);
