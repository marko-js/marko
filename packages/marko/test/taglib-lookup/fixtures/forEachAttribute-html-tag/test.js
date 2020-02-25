exports.check = function(markoCompiler, expect) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  var hasHrefAttr = false;

  lookup.forEachAttribute("a", attr => {
    if (attr.name === "href") {
      hasHrefAttr = true;
    }
  });

  expect(hasHrefAttr).to.equal(true);
};
