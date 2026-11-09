const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);
  var ifTag = lookup.getTag("if");
  assert.equal(ifTag != null, true);
  assert.equal(ifTag.name, "if");
};
