exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var transformers = [];
    var lookup = taglibLookup.buildLookup(__dirname);

    lookup.forEachTagTransformer('div', function (transformer) {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(3);
};