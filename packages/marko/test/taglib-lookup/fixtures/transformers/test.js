exports.check = function (markoCompiler, expect) {
  var transformers;
  var lookup;
  // lookup = taglibLookup.buildLookup(nodePath.join(__dirname, 'fixtures/nested'));

  // transformers = [];
  // lookup.forEachTagTransformer('nested-foo', function(transformer) {
  //     transformers.push(transformer);
  // });

  // expect(transformers.length).to.equal(2);

  lookup = markoCompiler.buildTaglibLookup(__dirname);

  transformers = [];
  lookup.forEachTagTransformer("transform-foo", function (transformer) {
    transformers.push(transformer);
  });

  expect(transformers.length).to.equal(1);
  expect(transformers[0].path.indexOf("foo")).to.not.equal(-1);

  transformers = [];
  lookup.forEachTagTransformer("transform-bar", function (transformer) {
    transformers.push(transformer);
  });

  expect(transformers.length).to.equal(1);
  expect(transformers[0].path.indexOf("bar")).to.not.equal(-1);
};
