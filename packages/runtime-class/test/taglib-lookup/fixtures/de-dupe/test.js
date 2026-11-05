const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(
    nodePath.join(__dirname, "taglib-duplicate"),
  );

  // The "duplicate-bar" tag was declared in the lower
  // taglib so it should have been found since the taglib
  // should not have been de-duped.
  var barTag = lookup.getTag("duplicate-bar");
  assert.equal(barTag != null, true);

  // The "duplicate-foo" tag was declared in the higher
  // up taglib so it should have been discarded
  var fooTag = lookup.getTag("duplicate-foo");
  assert.equal(fooTag == null, true);
};
