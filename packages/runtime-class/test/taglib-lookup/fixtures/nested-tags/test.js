const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(__dirname);
  var tag = lookup.getTag("nested-foo");

  assert.equal(tag != null, true);
  assert.equal(tag.name, "nested-foo");
};
