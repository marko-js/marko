// Prototype persisted entry (B2) for product.marko.
//
// Shape notes (what the real codegen would emit):
// - Placement + slot writes are plain statements against compiled accessors.
// - Slot-with-trigger reuses the template's existing value signal (imported
//   from the main DOM module -- it is interactive-reachable there).
// - The conditional merge IS an `_if` signal instance; the keyed-loop merge
//   IS a `_for_of` signal instance whose params signal is the body merge fn.
//   Fresh branches clone the same body template/walks the DOM output uses,
//   and the same merge fn fills resumed and freshly-cloned branches alike.
// - Presence checks (`"x" in patch`) implement sparse merge semantics:
//   absence means unchanged. Real codegen emits them only where the server's
//   own emission is guarded, always for structural props (tier-2 pruning
//   omits a pruned subtree's anchoring prop), and routes them through
//   per-kind runtime helpers where the check is byte-neutral -- see
//   "Sparse vs dense merge statements" in the proposals doc.
const { _text, _attr, _if, _for_of } = require("@marko/runtime-tags/debug/dom");
const { $input_product_featured } = require("../product.marko.dom.cjs");
const priceTagUpdate = require("./price-tag.update.js");

// From the compiled DOM output ($if / $for args for this template):
const $if_update = _if("#text/5", "<em>Save <!>%</em>", "Db%l", 0);
const $for_update = _for_of(
  "#ul/6",
  "<li><span class=price>$<!></span> <!></li>",
  "D/Db%l&b%l",
  0,
  (branch, [patchItem]) => $for_content__update(patchItem, branch),
);

const $if_content__update = (patch, live) => {
  if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};

const $for_content__update = (patch, live) => {
  if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
  if ("#childScope/0" in patch)
    priceTagUpdate.$update(patch["#childScope/0"], live["#childScope/0"]);
};

exports.$update = (patch, live) => {
  if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
  if ("#a/1" in patch) _attr(live["#a/1"], "href", patch["#a/1"]);
  if ("input_product_featured" in patch)
    $input_product_featured(live, patch.input_product_featured);
  if ("input_product_sale_percent" in patch)
    live.input_product_sale_percent = patch.input_product_sale_percent;
  if ("ConditionalRenderer:#text/5" in patch) {
    $if_update(live, patch["ConditionalRenderer:#text/5"]);
    const patchBranch = patch["BranchScopes:#text/5"];
    const liveBranch = live["BranchScopes:#text/5"];
    if (patchBranch && liveBranch) $if_content__update(patchBranch, liveBranch);
  }
  if ("BranchScopes:#ul/6" in patch) {
    $for_update(live, [
      patch["BranchScopes:#ul/6"],
      (item) => item["#LoopKey"],
    ]);
  }
};
