// End-to-end prototype: resume page A in a real DOM, mutate client state,
// then apply an A1 patch (derived from page B's render) through B2 merge
// functions -- asserting fine-grained updates and state preservation.
//
// Run from the repo root:
//   node -r '~ts' designs/experiments/single-page-server-updates/e2e.js
const assert = require("node:assert");
const path = require("node:path");
const { JSDOM } = require("jsdom");

const E = path.resolve("designs/experiments/single-page-server-updates");

const inputA = {
  product: {
    name: "Trailhead 40L Pack",
    slug: "trailhead-40",
    featured: true,
    sale: { percent: 20 },
  },
  related: [
    { id: 11, name: "Rain Cover", price: 24.5 },
    { id: 12, name: "Hip Belt", price: 39 },
    { id: 13, name: "Dry Sack", price: 14.25 },
  ],
};

// Navigation target: /products/summit-65
// name/slug/featured change, sale flips off, related reorders + adds + removes.
const inputB = {
  product: {
    name: "Summit 65L Pack",
    slug: "summit-65",
    featured: false,
    sale: null,
  },
  related: [
    { id: 12, name: "Hip Belt", price: 39 },
    { id: 21, name: "Ice Axe Loop", price: 11.5 },
    { id: 13, name: "Dry Sack", price: 14.25 },
  ],
};

// The A1 patch for A -> B, in the existing fill format with patch-space ids.
// Every prop is annotated with whether today's persisted render already emits
// it (per the render experiments) or which update-mode writer gap (G1-G3 in
// the proposals doc) supplies it.
const patchFill = (_) => [
  1,
  {
    "#text/0": "Summit 65L Pack", // G1: computed hole value as scope prop
    "#a/1": "/products/summit-65/specs", // G1: final attr string
    input_product_featured: false, // already emitted (closure-read slot)
    "ConditionalRenderer:#text/5": 1, // G2: conditional outcome (1 = no branch)
    "BranchScopes:#ul/6": [_(2), _(3), _(4)], // G3: loop branch list in fills
    // Deliberately hostile: server-default state that mode filtering would
    // drop. B2 merges only read compiled prop lists, so even an unfiltered
    // payload cannot clobber client state (asserted below).
    expanded: false,
  },
  { "#LoopKey": 12, "#text/1": "Hip Belt", "#childScope/0": _(5), _: _(1) },
  { "#LoopKey": 21, "#text/1": "Ice Axe Loop", "#childScope/0": _(6), _: _(1) },
  { "#LoopKey": 13, "#text/1": "Dry Sack", "#childScope/0": _(7), _: _(1) },
  { "#text/0": "39.00" }, // G1 (price-tag hole values, computed server-side)
  { "#text/0": "11.50" },
  { "#text/0": "14.25" },
];

async function main() {
  // --- 1. Server-render page A in persisted mode -------------------------
  const htmlA = await renderToString("product.persisted.marko.cjs", inputA);

  // --- 2. Boot a browser and let the real inline scripts run -------------
  const dom = new JSDOM("", { runScripts: "dangerously", pretendToBeVisual: true });
  const { window } = dom;
  installBrowserGlobals(window);

  window.document.open();
  window.document.write(`<body>${htmlA}</body>`);
  window.document.close();

  const renderId = Object.keys(window.M)[0];

  // --- 3. Load the "browser modules" (main DOM module + persisted entry) -
  const domRuntime = require("@marko/runtime-tags/debug/dom");
  require(path.join(E, "product.marko.dom.cjs")); // registers event handler etc.
  const productUpdate = require(path.join(E, "entries/product.update.js"));
  const { createPatch, flushPatch } = require(path.join(E, "update-runtime.js"));

  // Capture the live root scope via a root entry effect (how the real
  // system's update entry would be handed its pairing root). The page's
  // resume data rides a blocking ready channel keyed by its template id;
  // the hydrate entry shim normally drains it with ready(pageId).
  const pageId = "designs/experiments/single-page-server-updates/product.marko";
  let liveRoot;
  domRuntime._resume("e2e/root", (scope) => (liveRoot = scope));
  window.M[renderId].b[pageId].push("e2e/root 1");

  domRuntime.init("M");
  domRuntime.ready(pageId);
  await settle(window);
  assert.ok(liveRoot, "live root scope captured");

  // --- 4. Verify resume, then mutate client state ------------------------
  const doc = window.document;
  const section = doc.querySelector("section");
  const button = doc.querySelector("button");
  assert.equal(doc.querySelector("h1").textContent, "Trailhead 40L Pack");
  assert.equal(section.getAttribute("class"), null, "no spotlight before click");
  assert.ok(doc.querySelector("em"), "sale branch present");
  assert.equal(texts(doc, "li"), "$24.50 Rain Cover,$39.00 Hip Belt,$14.25 Dry Sack");

  button.click();
  await settle(window);
  assert.equal(button.textContent, "Hide details", "state flipped");
  assert.equal(section.getAttribute("class"), "spotlight", "intersection ran on client state");
  console.log("PASS resume + client interaction");

  // Element identity probes for the keyed reconcile.
  const liBefore = [...doc.querySelectorAll("li")];
  const keptHipBelt = liBefore[1];
  const keptDrySack = liBefore[2];

  // Show what page B's persisted render emits today (for the writer-gap
  // comparison in the doc) -- the patch below is what update mode WILL emit.
  const htmlB = await renderToString("product.persisted.marko.cjs", inputB);
  console.log("\npage B payload today:", htmlB.match(/M\.\w+\.b=(\{.*\});M\.\w+\.w\(\)/s)?.[1], "\n");

  // --- 5. Apply the A1 patch through the B2 merges ------------------------
  const mutations = observeMutations(window);
  const getPatchScope = createPatch(patchFill);
  productUpdate.$update(getPatchScope(1), liveRoot);
  flushPatch();
  await settle(window);

  // --- 6. Assert the merged document --------------------------------------
  assert.equal(doc.querySelector("h1").textContent, "Summit 65L Pack", "text hole placed");
  assert.equal(doc.querySelector("a").getAttribute("href"), "/products/summit-65/specs", "attr hole placed");
  assert.equal(section.getAttribute("class"), null, "intersection re-ran: preserved expanded=true && featured=false");
  assert.equal(doc.querySelector("em"), null, "sale branch destroyed");
  assert.equal(texts(doc, "li"), "$39.00 Hip Belt,$11.50 Ice Axe Loop,$14.25 Dry Sack", "loop reconciled");
  const liAfter = [...doc.querySelectorAll("li")];
  assert.equal(liAfter[0], keptHipBelt, "kept item element identity preserved (moved)");
  assert.equal(liAfter[2], keptDrySack, "kept item element identity preserved");
  assert.notEqual(liAfter[1], liBefore[0], "new item is a fresh element");
  assert.equal(button.textContent, "Hide details", "client state survived the navigation");
  assert.equal(liveRoot.expanded, true, "state slot untouched despite hostile expanded:false in payload");
  console.log("PASS patch application");

  console.log("\nmutations during patch:");
  for (const m of mutations.take()) console.log("  " + m);
}

// --- harness ---------------------------------------------------------------

async function renderToString(templateFile, input) {
  const template = require(path.join(E, templateFile)).default;
  let out = "";
  for await (const chunk of template.render(input)) out += chunk;
  return out;
}

function installBrowserGlobals(window) {
  for (const key of ["document", "Text", "Comment", "Node", "MutationObserver"]) {
    globalThis[key] = window[key];
  }
  globalThis.self = window;
  globalThis.window = window;
  globalThis.requestAnimationFrame = (fn) => setTimeout(() => fn(0), 0);
  globalThis.MessageChannel = window.MessageChannel || class {
    constructor() {
      this.port1 = { onmessage() {} };
      this.port2 = { postMessage: () => setTimeout(() => this.port1.onmessage(), 0) };
    }
  };
}

async function settle(window) {
  // Drain microtasks + the rAF/MessageChannel macrotask hops schedule() uses.
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

function texts(doc, selector) {
  return [...doc.querySelectorAll(selector)]
    .map((el) => el.textContent.replace(/\s+/g, " ").trim())
    .join(",");
}

function observeMutations(window) {
  const records = [];
  const pending = [];
  const observer = new window.MutationObserver((batch) => pending.push(...batch));
  observer.observe(window.document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
  });
  return {
    take() {
      for (const r of [...pending, ...observer.takeRecords()]) {
        if (r.type === "characterData") {
          records.push(`characterData: ${JSON.stringify(r.oldValue)} -> ${JSON.stringify(r.target.data)}`);
        } else if (r.type === "attributes") {
          records.push(`attribute ${r.attributeName} on <${r.target.tagName.toLowerCase()}>`);
        } else {
          const added = [...r.addedNodes].map(describeNode).join(" ");
          const removed = [...r.removedNodes].map(describeNode).join(" ");
          records.push(`childList in <${(r.target.tagName || "").toLowerCase()}>${added ? ` +[${added}]` : ""}${removed ? ` -[${removed}]` : ""}`);
        }
      }
      observer.disconnect();
      return records;
    },
  };
}

function describeNode(node) {
  return node.nodeType === 1
    ? `<${node.tagName.toLowerCase()}>`
    : JSON.stringify((node.textContent || "").slice(0, 20));
}

main().then(
  () => console.log("\nE2E PASS"),
  (err) => {
    console.error("\nE2E FAIL:", err && err.message);
    console.error(err && err.stack);
    process.exit(1);
  },
);
