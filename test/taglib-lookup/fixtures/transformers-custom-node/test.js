exports.check = function (markoCompiler, expect) {
    var taglibLookup = markoCompiler.taglibLookup;
    var transformers = [];

    var lookup = taglibLookup.buildLookup(__dirname);

    lookup.forEachTagTransformer('else', function (transformer) {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(3);
    expect(transformers[0].path.indexOf('core-transformer')).to.not.equal(-1);
    expect(transformers[1].path.indexOf('lasso-nonce-attr-transformer')).to.not.equal(-1);
    expect(transformers[2].path.indexOf('components-transformer')).to.not.equal(-1);
};