// Dump failed runs into a compact markdown file for failure-mode labeling.
// Usage: node harness/dump-failures.mjs <resultsFile> [outFile]
import { readFile, writeFile } from "node:fs/promises";

const resultsFile = process.argv[2];
const outFile = process.argv[3] || resultsFile.replace(/\.json$/, "-failures.md");
const { runs } = JSON.parse(await readFile(resultsFile, "utf8"));

let md = "";
for (const r of runs.filter((r) => !r.pass)) {
  md += `\n## ${r.runId}\n`;
  if (r.fatal) md += `FATAL(${r.fatal.phase}): ${r.fatal.detail.slice(0, 700)}\n`;
  const bad = (r.checks || []).filter((c) => !c.pass);
  if (bad.length) md += `FAILED CHECKS: ${bad.map((c) => `${c.name}${c.detail ? ` {${c.detail.slice(0, 120)}}` : ""}`).join(" | ")}\n`;
  const passed = (r.checks || []).filter((c) => c.pass).length;
  md += `(passed ${passed}/${(r.checks || []).length} checks)\n`;
  for (const f of r.files || []) {
    md += `\n\`\`\` ${f.path}\n${f.content.trim()}\n\`\`\`\n`;
  }
}
const failCount = runs.filter((r) => !r.pass).length;
await writeFile(outFile, md.trim() + "\n");
console.log(`${failCount} failures -> ${outFile} (${md.length} chars)`);
