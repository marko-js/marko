// Simulate optional storage/caching layers over a captured persisted-pages
// corpus and report what each would save on real navigation flows.
//
// Corpus: a directory produced by marko-ecommerce
// `scripts/experiments/capture-corpus.mjs` (manifest.json + response bodies),
// optionally plus `MARKO_WIRE_DUMP` output from measure-persisted-scaling.ts.
//
// Layers simulated per patch step:
//  - doc-dict:  zstd with the flow's entry document as dictionary
//               (Compression Dictionary Transport, zero pre-download form).
//  - prev-dict: zstd with the immediately previous response as dictionary
//               (CDT prior-response mode; needs a server response-byte store).
//  - sess-dict: zstd with all previous responses in the session concatenated
//               (upper bound for a response-byte store).
//  - shell dedup: shell entry bytes whose id was already delivered earlier in
//               the session (shells-held echo win) and shell ids present in
//               the public client assets (tier-A reuse win).
//  - value prune: fill properties byte-identical to the previous same-route
//               patch (content-addressed value store win, item granularity).
//
// Usage: node -r ~ts scripts/measure-persisted-layer-sims.ts <corpusDir> [assetsDir]
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  brotliCompressSync,
  constants as zc,
  gzipSync,
  zstdCompressSync,
} from "node:zlib";

import { parseExpression } from "@marko/compiler/internal/babel";

const corpusDir = process.argv[2];
const assetsDir = process.argv[3];
if (!corpusDir)
  throw new Error(
    "usage: measure-persisted-layer-sims <corpusDir> [publicAssetsDir]",
  );

const manifest = JSON.parse(
  readFileSync(path.join(corpusDir, "manifest.json"), "utf8"),
) as {
  flows: Record<
    string,
    { kind: string; path: string; pattern: string; file: string }[]
  >;
};

const publicAssets = assetsDir
  ? readdirSync(assetsDir)
      .filter((f) => f.endsWith(".js"))
      .map((f) => readFileSync(path.join(assetsDir, f), "utf8"))
      .join("\n")
  : "";

const pct = (part: number, whole: number) =>
  whole ? `${((100 * part) / whole).toFixed(1)}%` : "-";
const kb = (n: number) => (n / 1024).toFixed(2);

function zstd(buf: Buffer, dictionary?: Buffer) {
  return zstdCompressSync(buf, {
    ...(dictionary && { dictionary }),
    params: { [zc.ZSTD_c_compressionLevel]: 19 },
  }).length;
}
const brotli = (buf: Buffer) =>
  brotliCompressSync(buf, {
    params: { [zc.BROTLI_PARAM_QUALITY]: 11 },
  }).length;

interface FrameParts {
  shells: { id: string; template: string; bytes: number }[];
  /** `accessorKey:valueSource` per fill property, with source length. */
  props: Map<string, { bytes: number; count: number }>;
  fillBytes: number;
  /** Per frame: source text plus strippable spans for the stack sim. */
  frames: {
    text: string;
    shellSpans: { id: string; start: number; end: number }[];
    propSpans: { key: string; start: number; end: number }[];
  }[];
}

function parseFrames(body: string): FrameParts {
  const parts: FrameParts = {
    shells: [],
    props: new Map(),
    fillBytes: 0,
    frames: [],
  };
  for (const frame of body.split("\n")) {
    if (!frame) continue;
    let ast;
    try {
      ast = parseExpression(frame, {});
    } catch {
      continue; // non-expression line (defensive; frames are expressions)
    }
    if (ast.type !== "ArrayExpression") continue;
    parts.frames.push({ text: frame, shellSpans: [], propSpans: [] });
    walkEntries(ast, frame, parts);
  }
  return parts;
}

// Fills appear at top level (`_=>[...]`) and nested inside ready batches
// (`["readyId", _=>[...]]`); shells are `[0, id, template, walks]`.
function walkEntries(
  node: { type: string } & Record<string, any>,
  frame: string,
  parts: FrameParts,
) {
  if (node.type !== "ArrayExpression") return;
  if (
    node.elements[0]?.type === "NumericLiteral" &&
    node.elements[0].value === 0 &&
    node.elements[1]?.type === "StringLiteral"
  ) {
    parts.shells.push({
      id: node.elements[1].value,
      template:
        node.elements[2]?.type === "StringLiteral"
          ? node.elements[2].value
          : "",
      bytes: node.end! - node.start!,
    });
    parts.frames.at(-1)!.shellSpans.push({
      id: node.elements[1].value,
      start: node.start!,
      end: node.end!,
    });
    return;
  }
  for (const el of node.elements) {
    if (!el) continue;
    if (el.type === "ArrowFunctionExpression") {
      parts.fillBytes += el.end! - el.start!;
      walkFills(el.body, frame, parts);
    } else {
      walkEntries(el, frame, parts);
    }
  }
}

function walkFills(
  node: { type: string } & Record<string, any>,
  src: string,
  parts: FrameParts,
) {
  if (node.type === "ArrayExpression") {
    for (const el of node.elements) el && walkFills(el, src, parts);
  } else if (node.type === "ObjectExpression") {
    for (const prop of node.properties) {
      if (prop.type !== "ObjectProperty") continue;
      const key = src.slice(prop.start, prop.end);
      const existing = parts.props.get(key);
      if (existing) existing.count++;
      else parts.props.set(key, { bytes: prop.end - prop.start, count: 1 });
      parts.frames.at(-1)!.propSpans.push({
        key,
        start: prop.start,
        end: prop.end,
      });
    }
  }
}

/** The body with echo-duplicate shells and store-held props stripped: the
 * protocol-level optional stack (shells-held echo + value store) end to end.
 * Dangling commas are left in place (a real wire would elide them). */
function stripStack(
  cur: FrameParts,
  alreadyHeldShells: Set<string>,
  prev: FrameParts | undefined,
) {
  const remaining = new Map<string, number>();
  if (prev) {
    for (const [key, { count }] of prev.props) remaining.set(key, count);
  }
  const out: string[] = [];
  for (const frame of cur.frames) {
    const spans: { start: number; end: number }[] = [];
    for (const shell of frame.shellSpans) {
      if (alreadyHeldShells.has(shell.id)) spans.push(shell);
    }
    for (const span of frame.propSpans) {
      const held = remaining.get(span.key);
      if (held) {
        remaining.set(span.key, held - 1);
        spans.push(span);
      }
    }
    spans.sort((a, b) => a.start - b.start);
    let text = "";
    let pos = 0;
    for (const span of spans) {
      text += frame.text.slice(pos, span.start);
      pos = span.end;
    }
    out.push(text + frame.text.slice(pos));
  }
  return Buffer.from(out.join("\n"));
}

/** Bytes of `frame` fill props that also occur (multiset) in `prev`. */
function prunableBytes(prev: FrameParts, cur: FrameParts) {
  let bytes = 0;
  for (const [key, { bytes: b, count }] of cur.props) {
    const held = prev.props.get(key);
    if (held) bytes += b * Math.min(count, held.count);
  }
  return bytes;
}

console.log(
  "\nflow/step            path                     raw     gzip      br    zstd | doc-dict prev-dict sess-dict | shells  dup(echo) tierA | prunable",
);
console.log("-".repeat(158));

const flowTotals: Record<string, Record<string, number>> = {};
for (const [flow, steps] of Object.entries(manifest.flows)) {
  const bodies = steps.map((s) => readFileSync(path.join(corpusDir, s.file)));
  const docBody = bodies[0];
  const seenShells = new Set<string>();
  const lastSameRoute = new Map<string, FrameParts>();
  const totals = (flowTotals[flow] = {
    raw: 0,
    br: 0,
    zstd: 0,
    docDict: 0,
    prevDict: 0,
    sessDict: 0,
    shells: 0,
    dupShells: 0,
    tierA: 0,
    prunable: 0,
    fills: 0,
    stackRaw: 0,
    stackBr: 0,
  });

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const body = bodies[i];
    if (step.kind !== "patch") {
      console.log(
        `${(flow + "[" + i + "]").padEnd(20)} ${("doc " + step.path).padEnd(24)} ${String(body.length).padStart(6)}  ${String(gzipSync(body).length).padStart(6)}  ${String(brotli(body)).padStart(6)}  ${String(zstd(body)).padStart(6)} | (document; dictionary source)`,
      );
      continue;
    }
    const session = Buffer.concat(bodies.slice(0, i));
    const sizes = {
      raw: body.length,
      gzip: gzipSync(body).length,
      br: brotli(body),
      zstd: zstd(body),
      docDict: zstd(body, docBody),
      prevDict: zstd(body, bodies[i - 1]),
      sessDict: zstd(body, session.subarray(-256 * 1024)),
    };

    const parts = parseFrames(body.toString());
    const heldShells = new Set(seenShells);
    let shellBytes = 0;
    let dupShellBytes = 0;
    let tierABytes = 0;
    for (const shell of parts.shells) {
      shellBytes += shell.bytes;
      if (seenShells.has(shell.id)) dupShellBytes += shell.bytes;
      else if (
        shell.template.length > 8 &&
        publicAssets.includes(shell.template)
      )
        tierABytes += shell.bytes;
      seenShells.add(shell.id);
    }
    const prev = lastSameRoute.get(step.pattern);
    const prunable = prev ? prunableBytes(prev, parts) : 0;
    const stack = stripStack(parts, heldShells, prev);
    const stackBr = brotli(stack);
    lastSameRoute.set(step.pattern, parts);

    totals.raw += sizes.raw;
    totals.br += sizes.br;
    totals.zstd += sizes.zstd;
    totals.docDict += sizes.docDict;
    totals.prevDict += sizes.prevDict;
    totals.sessDict += sizes.sessDict;
    totals.shells += shellBytes;
    totals.dupShells += dupShellBytes;
    totals.tierA += tierABytes;
    totals.prunable += prunable;
    totals.fills += parts.fillBytes;
    totals.stackRaw += stack.length;
    totals.stackBr += stackBr;

    console.log(
      `${(flow + "[" + i + "]").padEnd(20)} ${step.path.padEnd(24)} ${String(sizes.raw).padStart(6)}  ${String(sizes.gzip).padStart(6)}  ${String(sizes.br).padStart(6)}  ${String(sizes.zstd).padStart(6)} |  ${String(sizes.docDict).padStart(6)}   ${String(sizes.prevDict).padStart(6)}    ${String(sizes.sessDict).padStart(6)} | ${String(shellBytes).padStart(6)}  ${String(dupShellBytes).padStart(8)} ${String(tierABytes).padStart(5)} | ${String(prunable).padStart(6)}${prev ? "" : " (first)"} stack=${stack.length}/${stackBr}br`,
    );
  }
}

console.log("\nPer-flow patch totals (raw bytes unless noted):");
for (const [flow, t] of Object.entries(flowTotals)) {
  console.log(
    `  ${flow.padEnd(10)} raw=${kb(t.raw)}kB br=${kb(t.br)}kB zstd=${kb(t.zstd)}kB | ` +
      `doc-dict=${kb(t.docDict)}kB (${pct(t.zstd - t.docDict, t.zstd)} vs zstd) ` +
      `prev-dict=${kb(t.prevDict)}kB (${pct(t.zstd - t.prevDict, t.zstd)}) ` +
      `sess-dict=${kb(t.sessDict)}kB (${pct(t.zstd - t.sessDict, t.zstd)})`,
  );
  console.log(
    `  ${"".padEnd(10)} shells=${kb(t.shells)}kB (${pct(t.shells, t.raw)} of raw; echo-dup=${kb(t.dupShells)}kB, tierA-first=${kb(t.tierA)}kB) ` +
      `value-prunable=${kb(t.prunable)}kB (${pct(t.prunable, t.fills)} of fill bytes on same-route steps)`,
  );
  console.log(
    `  ${"".padEnd(10)} protocol stack (echo+store strip): raw=${kb(t.stackRaw)}kB br=${kb(t.stackBr)}kB (${pct(t.br - t.stackBr, t.br)} vs br)`,
  );
}

// Scaling-dump pairs (big-list scenario): <label>-doc.txt / <label>-patch.txt
const dumps = existsSync(corpusDir)
  ? readdirSync(corpusDir).filter((f) => f.endsWith("-patch.txt"))
  : [];
if (dumps.length) {
  console.log(
    "\nBig-list scenario (scaling dump; second consecutive patch where available):",
  );
  for (const file of dumps) {
    const label = file.replace(/-patch\.txt$/, "");
    if (label.endsWith("-patch2")) continue;
    const patch = readFileSync(path.join(corpusDir, file));
    const doc = readFileSync(path.join(corpusDir, `${label}-doc.txt`));
    console.log(
      `  ${label.padEnd(12)} patch1 raw=${kb(patch.length)}kB br=${kb(brotli(patch))}kB zstd=${kb(zstd(patch))}kB ` +
        `doc-dict=${kb(zstd(patch, doc))}kB`,
    );
    const patch2File = path.join(corpusDir, `${label}-patch2.txt`);
    if (!existsSync(patch2File)) continue;
    // The client holds document + patch1; patch2 is the next navigation.
    const patch2 = readFileSync(patch2File);
    const parts1 = parseFrames(patch.toString());
    const parts2 = parseFrames(patch2.toString());
    const prunable = prunableBytes(parts1, parts2);
    console.log(
      `  ${"".padEnd(12)} patch2 raw=${kb(patch2.length)}kB br=${kb(brotli(patch2))}kB zstd=${kb(zstd(patch2))}kB ` +
        `prev-dict=${kb(zstd(patch2, patch))}kB sess-dict=${kb(zstd(patch2, Buffer.concat([doc, patch])))}kB | ` +
        `value-prunable=${kb(prunable)}kB (${pct(prunable, parts2.fillBytes)} of fills)`,
    );
  }
}
