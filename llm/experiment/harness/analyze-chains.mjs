// Two-round repair-chain analysis.
// Usage: node harness/analyze-chains.mjs <armName> <round1Results> <round2Results>
import { readFile } from "node:fs/promises";

const [armName, r1File, r2File] = process.argv.slice(2);
const r1 = JSON.parse(await readFile(r1File, "utf8")).runs;
const r2 = JSON.parse(await readFile(r2File, "utf8")).runs;
const r2ByChain = new Map(r2.map((r) => [r.runId.replace(/-fix$/, ""), r]));

const state = (r) =>
  !r ? "no-round" :
  r.pass ? "pass" :
  !r.files?.length ? "no-output" :
  r.fatal ? "compile-fail" : "runs-but-wrong";

const errSig = (r) => {
  if (!r?.fatal) return state(r);
  const m = r.fatal.detail.match(/\^+ ([^\n]{10,90})/);
  return m ? m[1].trim().slice(0, 70) : r.fatal.detail.slice(0, 70);
};

const chains = [];
for (const a of r1) {
  const b = r2ByChain.get(a.runId);
  const chain = {
    id: a.runId,
    taskId: a.taskId,
    s1: state(a),
    s2: a.pass ? "terminal-pass" : state(b),
    final: a.pass ? "pass" : state(b),
    stalled: !a.pass && a.fatal && b?.fatal ? errSig(a) === errSig(b) : false,
  };
  chains.push(chain);
}

const count = (fn) => chains.filter(fn).length;
console.log(`=== ${armName} (${chains.length} chains) ===`);
console.log(`pass after round 1:      ${count((c) => c.s1 === "pass")}`);
console.log(`pass after round 2:      ${count((c) => c.final === "pass")}`);
console.log(`compiles/serves @ r1:    ${count((c) => c.s1 === "pass" || c.s1 === "runs-but-wrong")}`);
console.log(`compiles/serves @ r2:    ${count((c) => c.final === "pass" || c.final === "runs-but-wrong")}`);
console.log(`still compile-fail @ r2: ${count((c) => c.final === "compile-fail")}`);
console.log(`stalled on same error:   ${count((c) => c.stalled)} of ${count((c) => c.s1 === "compile-fail" && (c.s2 === "compile-fail"))} r2 compile-fails`);

const tasks = [...new Set(chains.map((c) => c.taskId))].sort();
console.log("\ntask             r1-pass  r2-pass  r2-serving");
for (const t of tasks) {
  const tc = chains.filter((c) => c.taskId === t);
  const p1 = tc.filter((c) => c.s1 === "pass").length;
  const p2 = tc.filter((c) => c.final === "pass").length;
  const sv = tc.filter((c) => c.final === "pass" || c.final === "runs-but-wrong").length;
  console.log(`${t.padEnd(16)} ${String(p1).padEnd(8)} ${String(p2).padEnd(8)} ${sv}/${tc.length}`);
}
