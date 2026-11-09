const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var taglibLookup = markoCompiler.taglibLookup;
  var lookup = taglibLookup.buildLookup(__dirname);
  // console.log('LOOKUP: ', Object.keys(lookup.attributes));
  var attrDef = lookup.getAttribute(
    "test-dynamic-attributes",
    "global-attribute",
  );
  assert.equal(attrDef != null, true);
  assert.equal(attrDef.type, "boolean");
};
