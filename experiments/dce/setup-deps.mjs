// Recreates the `heavy-lib` server-only dependency fixture used by serverdep.ts.
// node_modules is gitignored, so run this once before serverdep.ts:
//   node experiments/dce/setup-deps.mjs
import fs from "fs";
import path from "path";
const dir = path.join(import.meta.dirname, "node_modules", "heavy-lib");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "package.json"),
  // NOTE: intentionally NOT `sideEffects:false` — models a server-only dep with
  // poor tree-shaking hygiene. Set sideEffects:false to see the leak disappear.
  JSON.stringify({ name: "heavy-lib", type: "module", main: "index.mjs" }, null, 2));
fs.writeFileSync(path.join(dir, "index.mjs"),
  `export function renderMarkdown(s){ return "<p>"+s.toUpperCase()+"</p>"; }\n` +
  `export const BIG = new Array(500).fill(0).map((_,i)=>"payload_chunk_"+i).join("|");\n`);
console.log("wrote", dir);
