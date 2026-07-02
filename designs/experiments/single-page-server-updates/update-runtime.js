// Prototype of the shared client update runtime: builds patch scopes from an
// A1 fill (the existing resume fill format, patch-space ids) and flushes the
// render queue after merges run. The real runtime adds: frame parsing, effect
// dispatch through the registry, ready-channel gating, and $global merging.
const { run } = require("@marko/runtime-tags/debug/dom");

exports.createPatch = function createPatch(fill) {
  const scopes = {};
  const get = (id) => (scopes[id] ||= { "#patchId": id });
  const apply = (arr) => {
    let id = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const part = arr[i];
      if (typeof part === "number") id += part;
      else {
        Object.assign(get(id), part);
        id++;
      }
    }
  };
  const ctx = (data) => (typeof data === "number" ? get(data) : apply(data));
  const result = fill(ctx);
  if (Array.isArray(result)) apply(result);
  return get;
};

exports.flushPatch = function flushPatch() {
  // Merges queue renders (intersections, branch setups); flush synchronously.
  run();
};
