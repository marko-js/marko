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

// The A1 patch for A -> B is now derived from a real update render of page B
// (`$global.persisted = "update"`): the writer's update mode supplies the
// computed hole values (G1, including the `UpdateAttr:<name>:<accessor>`
// attr-value keys), explicit conditional outcomes (G2, -1 = no branch),
// branch lists + loop keys + owner refs (G3/G4), and suppresses effect
// strings for matched scopes (G5). The server's default state props
// (`expanded: false`) still ride along unfiltered -- deliberately hostile:
// B2 merges only read compiled prop lists, so the payload cannot clobber
// client state (asserted below).
function extractUpdateFill(html, pageId) {
  const src = html.match(/\.b=(\{.*\});M\.\w+\.w\(\)/s)?.[1];
  assert.ok(src, "update render carried a resume fill");
  const channels = new Function(`return (${src})`)();
  const fills = channels[pageId];
  assert.ok(fills && fills.length === 1, "single-flush fill for the page");
  assert.ok(!/\.e=/.test(html), "no effect strings in the update payload (G5)");
  return fills[0];
}

async function main() {
  // --- 1. Server-render page A in persisted mode -------------------------
  // Requires the artifact compiled with `persisted: true` (PERSISTED=1);
  // the per-request opt-in is `$global.persisted`.
  const htmlA = await renderToString("product.marko.cjs", inputA);

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
  // The persisted dom module registers event handlers AND the pieces update
  // entries share through the registry: value/conditional signals
  // (`_var_resume`) and loop branch content (`[template, walks, setup]`).
  require(path.join(E, "product.marko.dom.cjs"));
  // The GENERATED update entry (the `?update` virtual module, compiled with
  // `persisted: "update"`); the hand-authored `entries/*.update.js` remain
  // as the codegen spec this replaced.
  const productUpdate = require(path.join(E, "product.marko.update.cjs")).default;
  const updateRuntime = require(path.join(E, "update-runtime.js"));
  const { createPatch, flushPatch } = updateRuntime;

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

  // Render page B as a real update render and derive the patch from it.
  const htmlB = await renderToString("product.marko.cjs", inputB, "update");
  const patchFill = extractUpdateFill(htmlB, pageId);
  console.log("\npage B update payload:", htmlB.match(/M\.\w+\.b=(\{.*\});M\.\w+\.w\(\)/s)?.[1], "\n");

  // --- 5. Apply the A1 patch through the B2 merges ------------------------
  const mutations = observeMutations(window);
  // Branch markup no longer arrives via a hand-delivered `templates` frame:
  // generated entries share the main dom module's branch content through the
  // resume registry (registered when `product.marko.dom.cjs` loaded above).
  const getPatchScope = createPatch(patchFill);
  productUpdate(getPatchScope(1), liveRoot);
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
  const patchMutations = mutations.take();

  // --- 7. Effects rule: no effect replay for matched scopes ---------------
  // The patch carried no effect strings for scope 1, so the mount-time
  // `_script` (event binding) must not have re-run. A double-bound click
  // handler would toggle `expanded` twice (net no-op); a single toggle
  // proves exactly-once binding survived the update.
  button.click();
  await settle(window);
  assert.equal(liveRoot.expanded, false, "one click = one toggle (no double-bound handler)");
  assert.equal(button.textContent, "Show details", "interactivity intact after patch");
  console.log("PASS effects-not-replayed (no double bind)");

  // --- 8. Navigate back (B -> A): fresh conditional branch creation -------
  // The sale branch was destroyed above; this patch re-creates it, proving
  // fresh `_if` branches clone the registry-shared content and fill from the
  // patched scope values.
  const htmlA2 = await renderToString("product.marko.cjs", inputA, "update");
  productUpdate(createPatch(extractUpdateFill(htmlA2, pageId))(1), liveRoot);
  flushPatch();
  await settle(window);
  assert.equal(doc.querySelector("h1").textContent, "Trailhead 40L Pack");
  assert.ok(doc.querySelector("em"), "sale branch re-created");
  assert.equal(
    doc.querySelector("em").textContent.replace(/\s+/g, " ").trim(),
    "Save 20%",
    "fresh branch filled from patch",
  );
  assert.equal(texts(doc, "li"), "$24.50 Rain Cover,$39.00 Hip Belt,$14.25 Dry Sack");
  assert.equal(liveRoot.expanded, false, "client state still owned by client");
  console.log("PASS reverse navigation (fresh branch creation)");

  console.log("\nmutations during patch:");
  for (const m of patchMutations) console.log("  " + m);
}

// --- harness ---------------------------------------------------------------

async function renderToString(templateFile, input, mode = true) {
  const template = require(path.join(E, templateFile)).default;
  let out = "";
  for await (const chunk of template.render({
    ...input,
    $global: { persisted: mode },
  }))
    out += chunk;
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
