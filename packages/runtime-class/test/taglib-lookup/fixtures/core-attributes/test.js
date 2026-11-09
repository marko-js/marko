const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);
  // console.log('LOOKUP: ', Object.keys(lookup.attributes));
  var noupdateAttr = lookup.getAttribute("div", "no-update");
  assert.equal(noupdateAttr != null, true);
  assert.equal(noupdateAttr.type, "flag");
};
