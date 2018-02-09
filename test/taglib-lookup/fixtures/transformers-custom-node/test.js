exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var transformers = [];

    var lookup = taglibLookup.buildLookup(__dirname);

    lookup.forEachTagTransformer('else', function (transformer) {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(2);
    expect(transformers[0].path.indexOf('core-transformer')).to.not.equal(-1);
    expect(transformers[1].path.indexOf('components-transformer')).to.not.equal(-1);
};
