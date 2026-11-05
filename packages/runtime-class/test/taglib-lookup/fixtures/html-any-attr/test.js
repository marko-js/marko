const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  var attrDef = lookup.getAttribute("div", "blah");
  assert.ok(typeof attrDef === "object" && attrDef !== null);
};
