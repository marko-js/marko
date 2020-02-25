exports.check = function(markoCompiler, expect) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);
  var ifTag = lookup.getTag("if");
  expect(ifTag != null).to.equal(true);
  expect(ifTag.name).to.equal("if");
};
