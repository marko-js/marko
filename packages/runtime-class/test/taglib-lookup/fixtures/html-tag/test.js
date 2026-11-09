const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  assert.equal(lookup.getTag("div").html, true);
  assert.equal(lookup.getAttribute("div", "id").html, true);
};
