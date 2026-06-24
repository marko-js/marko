// Aggregate the repo's own fixture corpus to characterize real-world client DCE.
//   node experiments/dce/corpus.mjs
import fs from "fs";
import path from "path";
const root = path.resolve(
  "packages/runtime-tags/src/__tests__/fixtures",
);
const rows = [];
for (const dir of fs.readdirSync(root)) {
  const f = path.join(root, dir, "sizes.json");
  if (!fs.existsSync(f)) continue;
  let j;
  try { j = JSON.parse(fs.readFileSync(f, "utf8")); } catch { continue; }
  let brotli = 0;
  if (j.dom) for (const k in j.dom) { const v = j.dom[k]; brotli += (v.total ?? v).brotli ?? 0; }
  rows.push({ dir, brotli });
}
const withDom = rows.filter((r) => r.brotli > 0).sort((a, b) => a.brotli - b.brotli);
const zero = rows.length - withDom.length;
const q = (p) => withDom[Math.floor(p * (withDom.length - 1))].brotli;
console.log(`fixtures: ${rows.length}  zero-client: ${zero} (${Math.round(100*zero/rows.length)}%)  interactive: ${withDom.length}`);
console.log(`client brotli: min=${withDom[0].brotli} p25=${q(.25)} median=${q(.5)} p75=${q(.75)} p95=${q(.95)} max=${withDom.at(-1).brotli}`);
console.log("largest:", withDom.slice(-8).reverse().map((r) => `${r.brotli}b ${r.dir}`).join("\n          "));
