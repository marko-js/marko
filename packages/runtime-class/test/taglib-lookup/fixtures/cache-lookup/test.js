const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup1 = taglibLookup.buildLookup(nodePath.join(__dirname, "foo"));
  var lookup2 = taglibLookup.buildLookup(nodePath.join(__dirname, "foo"));
  var lookup3 = taglibLookup.buildLookup(nodePath.join(__dirname, "foo/empty"));
  var lookup4 = taglibLookup.buildLookup(nodePath.join(__dirname, "baz"));
  assert.equal(lookup1, lookup2);
  assert.equal(lookup2, lookup3);
  assert.notEqual(lookup1, lookup4);
};
