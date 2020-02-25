exports.check = function(markoCompiler, expect) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  var attrDef = lookup.getAttribute("div", "blah");
  expect(attrDef).to.be.an("object");
};
