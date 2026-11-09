const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(__dirname);

  assert.equal(lookup.getAttribute("foo", "cat").type, "boolean");
  assert.equal(lookup.getAttribute("foo", "age").type, "integer");
  assert.equal(lookup.getAttribute("bar", "dog").type, "boolean");
  assert.equal(lookup.getAttribute("bar", "age").type, "integer");
};
