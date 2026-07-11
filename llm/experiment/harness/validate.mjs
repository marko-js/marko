import { cp, rm, mkdir } from "node:fs/promises";
import path from "node:path";
import { gradeRun, closeBrowser, ROOT } from "./lib.mjs";

const only = process.argv.slice(2);
const all = [
  "t1-counter", "t2-temperature", "t3-todos", "t4-tabs", "t5-await",
  "t6-layout", "t7-products", "t8-guestbook",
  "h1-drawer", "h2-search", "h3-admin",
];
const tasks = only.length ? only : all;

let port = 4700;
let failures = 0;
for (const id of tasks) {
  const taskDir = path.join(ROOT, "tasks", id);
  const runDir = path.join(ROOT, "runs", "_validate", id);
  await rm(runDir, { recursive: true, force: true });
  await mkdir(runDir, { recursive: true });
  await cp(path.join(taskDir, "solution"), runDir, { recursive: true });
  const t0 = Date.now();
  const result = await gradeRun({ taskDir, runDir, port: port++ });
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  const bad = result.checks.filter((c) => !c.pass);
  if (result.pass) {
    console.log(`PASS ${id} (${result.checks.length} checks, ${secs}s)`);
  } else {
    failures++;
    console.log(`FAIL ${id} (${secs}s)`);
    if (result.fatal) console.log(`  fatal[${result.fatal.phase}]: ${result.fatal.detail.slice(0, 600)}`);
    for (const c of bad) console.log(`  ✗ ${c.name}: ${c.detail}`);
  }
}
await closeBrowser();
process.exit(failures ? 1 : 0);
