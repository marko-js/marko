exports.check = function (markoCompiler, expect) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  expect(lookup.getTag("div").html).to.equal(true);
  expect(lookup.getAttribute("div", "id").html).to.equal(true);
};
