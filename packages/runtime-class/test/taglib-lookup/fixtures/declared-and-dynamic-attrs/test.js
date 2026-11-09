const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(__dirname);
  // console.log(Object.keys(lookup.attributes));
  var attr = lookup.getAttribute("test-dynamic-attribute", "DYNAMIC");
  assert.equal(attr != null, true);
  assert.equal(attr.type, "boolean");
  assert.equal(attr.name, "*");

  attr = lookup.getAttribute("test-dynamic-attribute", "foo");
  assert.equal(attr != null, true);
  assert.equal(attr.type, "string");
};
