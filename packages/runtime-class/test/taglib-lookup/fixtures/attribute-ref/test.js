const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(__dirname);

  var sharedAttrDef = lookup.getAttribute("foo", "hello");
  assert.equal(sharedAttrDef.type, "shared");

  sharedAttrDef = lookup.getAttribute("bar", "hello");
  assert.equal(sharedAttrDef.type, "shared");
};
