exports.check = function(markoCompiler, expect) {
  var transformers = [];
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  lookup.forEachTagTransformer("div", function(transformer) {
    transformers.push(transformer);
  });

  expect(transformers.length).to.equal(0);
};
