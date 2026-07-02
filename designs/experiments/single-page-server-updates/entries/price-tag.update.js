// Prototype persisted entry (B2) for tags/price-tag.marko.
// What the `?update` codegen would emit: placement-only merge, no expressions.
const { _text } = require("@marko/runtime-tags/debug/dom");

exports.$update = (patch, live) => {
  if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
