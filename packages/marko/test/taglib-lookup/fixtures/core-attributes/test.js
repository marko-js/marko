exports.check = function(markoCompiler, expect) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);
  // console.log('LOOKUP: ', Object.keys(lookup.attributes));
  var noupdateAttr = lookup.getAttribute("div", "no-update");
  expect(noupdateAttr != null).to.equal(true);
  expect(noupdateAttr.type).to.equal("flag");
};
