// Runs realistic navigations, verifies the client can reconstruct the exact target
// outlet from the minimal state payload, and measures bytes over the wire.
//
//   Tier A  — full document reload (today's multi-page behavior)
//   Tier B  — partial render: changed-subtree HTML only (shell skipped)
//   Tier C  — state + discriminant only (no outlet HTML)
//   Tier C+ — like C, but the client hints its current keys so reused-row holes are omitted
//
// Run:  node prototype/spa-server-updates/bench.js

import zlib from "node:zlib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert";

import {
  modelFor,
  renderFullPage,
  renderOutlet,
  buildUpdate,
  clientApply,
  clientStateFromModel,
} from "./engine.js";

const DIR = path.dirname(fileURLToPath(import.meta.url));
const bytes = (s) => Buffer.byteLength(s);
const gz = (s) => zlib.gzipSync(Buffer.from(s), { level: 6 }).length;
const br = (s) => zlib.brotliCompressSync(Buffer.from(s), { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } }).length;
const pct = (part, whole) => `${((100 * part) / whole).toFixed(1)}%`;
const pad = (s, n) => String(s).padStart(n);

const stripIds = (html) => html.replace(/\*\d+/g, "*"); // normalize scope ids for equality

const CART = new Set(); // browsing, cart empty + unchanged across navigations
const CART_COUNT = 0;

const SCENARIOS = [
  { name: "List re-sort (same items, reordered)", from: { view: "list", category: "all" }, to: { view: "list", category: "all", sort: "price-asc" } },
  { name: "List filter (all → audio)", from: { view: "list", category: "all" }, to: { view: "list", category: "audio" } },
  { name: "List → Detail", from: { view: "list", category: "audio" }, to: { view: "detail", id: "p1" } },
  { name: "Detail → Detail", from: { view: "detail", id: "p1" }, to: { view: "detail", id: "p6" } },
];

console.log("\n=== SPA server-first updates — prototype benchmark ===\n");
console.log("Compression: gzip(level 6), brotli(quality 5) — independent per response (no shared dict).");
console.log("Tier C uses compact JSON (a conservative upper bound; Marko's real wire format is tighter).\n");

let totalsGz = { A: 0, B: 0, C: 0 };

for (const sc of SCENARIOS) {
  // Tier A: full reload of the target.
  const full = renderFullPage(sc.to, CART, CART_COUNT);

  // Tiers B / C / C+ for the navigation.
  const upd = buildUpdate(sc.from, sc.to, CART, CART_COUNT, CART_COUNT);

  // --- correctness: reconstruct target outlet from tier C, compare to SSR ---
  const prev = clientStateFromModel(modelFor(sc.from), CART);
  const cPayload = JSON.parse(upd.stateOnly);
  const recon = clientApply(prev, cPayload);
  let nIds = 0;
  const ssrOutlet = renderOutlet(modelFor(sc.to), CART, () => ++nIds).html;
  assert.strictEqual(stripIds(recon.html), stripIds(ssrOutlet), `reconstruction mismatch in: ${sc.name}`);

  // C+ correctness (list scenarios)
  let hinted = null;
  if (upd.hinted) {
    const hp = JSON.parse(upd.hinted.body);
    const reconH = clientApply(prev, hp);
    assert.strictEqual(stripIds(reconH.html), stripIds(ssrOutlet), `C+ reconstruction mismatch in: ${sc.name}`);
    hinted = { body: upd.hinted.body, requestHintBytes: upd.hinted.requestHintBytes };
  }

  const A = { raw: bytes(full), gz: gz(full), br: br(full) };
  const B = { raw: bytes(upd.fragment), gz: gz(upd.fragment), br: br(upd.fragment) };
  const C = { raw: bytes(upd.stateOnly), gz: gz(upd.stateOnly), br: br(upd.stateOnly) };
  totalsGz.A += A.gz; totalsGz.B += B.gz; totalsGz.C += C.gz;

  console.log(`\n■ ${sc.name}`);
  console.log("  transport                         raw      gzip     brotli   (gzip vs full reload)");
  console.log(`  A  full reload (HTML+resume)   ${pad(A.raw, 7)}  ${pad(A.gz, 7)}  ${pad(A.br, 7)}   —`);
  console.log(`  B  partial HTML fragment       ${pad(B.raw, 7)}  ${pad(B.gz, 7)}  ${pad(B.br, 7)}   ${pad(pct(B.gz, A.gz), 6)}`);
  console.log(`  C  state + discriminant        ${pad(C.raw, 7)}  ${pad(C.gz, 7)}  ${pad(C.br, 7)}   ${pad(pct(C.gz, A.gz), 6)}`);
  if (hinted) {
    const H = { raw: bytes(hinted.body), gz: gz(hinted.body), br: br(hinted.body) };
    console.log(`  C+ state, client key-hint      ${pad(H.raw, 7)}  ${pad(H.gz, 7)}  ${pad(H.br, 7)}   ${pad(pct(H.gz, A.gz), 6)}   (+${hinted.requestHintBytes}B request hint)`);
  }
  const o = recon.ops;
  console.log(`  apply work (tier C): reused=${o.reused} created=${o.created} removed=${o.removed} moved=${o.moved} holeUpdates=${o.holeUpdates} branchSwaps=${o.branchSwaps}`);
}

// One-time cost: the "updates chunk" the client downloads once to enable tier C.
// Proxy = gzip of the shared, logic-stripped template module.
const updatesChunkSrc = fs.readFileSync(path.join(DIR, "templates.js"), "utf8");
const chunkGz = gz(updatesChunkSrc);

console.log("\n────────────────────────────────────────────────────────────");
console.log("Session totals (gzip, across the 4 navigations):");
console.log(`  A full reloads:        ${totalsGz.A} B`);
console.log(`  B partial fragments:   ${totalsGz.B} B   (${pct(totalsGz.B, totalsGz.A)} of full)`);
console.log(`  C state-only:          ${totalsGz.C} B   (${pct(totalsGz.C, totalsGz.A)} of full)`);
console.log(`\nOne-time cost to enable tier C: updates chunk ≈ ${chunkGz} B gzip (lazy, cached, per-route).`);
const saved = totalsGz.A - totalsGz.C;
console.log(`Per-session wire saved by C vs A: ${saved} B; chunk amortizes after ~${Math.max(1, Math.ceil(chunkGz / (saved / SCENARIOS.length)))} navigations.`);
console.log("\nAll reconstructions verified byte-identical to server SSR (scope ids normalized). ✔\n");
