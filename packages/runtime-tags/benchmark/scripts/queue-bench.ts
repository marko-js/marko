// Microbenchmark for the runtime-tags render queue (src/dom/queue.ts).
//
// The js-framework-benchmark operations spend much of their non-DOM time in the
// scheduling/queue layer, which is hard to isolate from DOM cost in a full-page
// benchmark. This bundles queue-workloads.ts (MARKO_DEBUG=false, minified) so
// the production queue is measured directly, then runs it under jsdom globals
// (the queue's transitive imports reference the DOM at module load).
//
//   node -r ~ts ./benchmark/scripts/queue-bench.ts
//
// (see the `benchmark:queue` script in package.json)
import path from "node:path";
import { pathToFileURL } from "node:url";

import { JSDOM } from "jsdom";
import { build } from "rolldown";

const scriptsDir = __dirname;
const entry = path.join(scriptsDir, "queue-workloads.ts");
const out = path.join(scriptsDir, "..", "dist", "queue-workloads.mjs");

run();

async function run() {
  await build({
    input: entry,
    transform: { define: { MARKO_DEBUG: "false" } },
    output: { file: out, format: "esm", minify: true },
  });

  const dom = new JSDOM(`<!DOCTYPE html><body></body>`, {
    url: "http://localhost/",
  });
  for (const key of [
    "window",
    "document",
    "HTMLElement",
    "Node",
    "Text",
    "Comment",
    "DocumentFragment",
    "Event",
    "CustomEvent",
  ]) {
    try {
      (globalThis as Record<string, unknown>)[key] = (
        dom.window as unknown as Record<string, unknown>
      )[key];
    } catch {
      /* some globals are read-only; the queue only needs the constructors */
    }
  }

  await import(pathToFileURL(out).href);
}
