// Regrade frozen broken apps to harvest fresh failure evidence (fatal/checks/guidance).
// Usage: node harness/regrade-broken.mjs <inFile> <outFile>
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { gradeRun, materialize, closeBrowser, ROOT } from "./lib.mjs";

const [inFile, outFile] = process.argv.slice(2);
const { runs } = JSON.parse(await readFile(inFile, "utf8"));

let port = 5900 + Math.floor(Math.random() * 100);
const out = [];
for (const r of runs) {
  const runDir = path.join(ROOT, "runs", "exp2", "regrade-apps", r.runId);
  await materialize(runDir, r.files);
  const result = await gradeRun({ taskDir: path.join(ROOT, "tasks", r.taskId), runDir, port: port++ });
  out.push({ ...r, fatal: result.fatal, checks: result.checks, guidance: result.guidance, serverLog: result.serverLog, pass: result.pass });
  const kind = result.fatal ? `fatal:${result.fatal.phase}` : result.pass ? "PASS(!)" : "checks";
  console.log(`${r.runId} -> ${kind}${result.guidance ? " +guidance" : ""}`);
}
await closeBrowser();
await writeFile(outFile, JSON.stringify({ round: "exp2-armB-evidence", runs: out }, null, 1));
console.log(`evidence -> ${outFile}`);
