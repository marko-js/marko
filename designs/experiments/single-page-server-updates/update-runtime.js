// Prototype of the shared client update runtime: builds patch scopes from an
// A1 fill (the existing resume fill format, patch-space ids) and flushes the
// render queue after merges run. The real runtime adds: frame parsing, effect
// dispatch through the registry, ready-channel gating, and $global merging.
const { run, _if, _for_of } = require("@marko/runtime-tags/debug/dom");

// --- Wire-delivered branch markup ------------------------------------------
// Persisted entries reference branch content by id instead of baking in
// template/walks strings; patches deliver the pairs (only for branches the
// server actually rendered) and the client caches them per build. `||=`
// makes retransmission a no-op, so server-side pruning is an optimization,
// never a correctness requirement.
const contents = {};

exports.addTemplates = (pairs) => {
  for (const id in pairs) contents[id] ||= pairs[id];
};

exports._wire_if = function _wire_if(nodeAccessor, contentIds) {
  let signal;
  return (scope, index) =>
    (signal ||= _if(
      nodeAccessor,
      ...contentIds.flatMap((id) => [...resolveContent(id), 0]),
    ))(scope, index);
};

exports._wire_for = function _wire_for(nodeAccessor, contentId, merge) {
  let signal;
  return (scope, value) =>
    (signal ||= _for_of(nodeAccessor, ...resolveContent(contentId), 0, merge))(
      scope,
      value,
    );
};

function resolveContent(id) {
  const pair = contents[id];
  if (!pair) throw new Error(`missing wire template ${JSON.stringify(id)}`);
  return pair;
}

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
