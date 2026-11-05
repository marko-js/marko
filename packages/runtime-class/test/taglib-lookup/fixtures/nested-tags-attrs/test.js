const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(__dirname);
  // console.log(Object.keys(lookup.attributes));
  var attr = lookup.getAttribute("nested-foo", "attr1");
  assert.equal(attr != null, true);
  assert.equal(attr.type, "string");
};
