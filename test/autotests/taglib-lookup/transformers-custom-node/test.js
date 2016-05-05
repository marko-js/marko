exports.check = function(taglibLookup, expect) {
    var transformers = [];

    var lookup = taglibLookup.buildLookup(__dirname);

    lookup.forEachTagTransformer('else', function(transformer) {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(1);
    expect(transformers[0].path.indexOf('core-transformer')).to.not.equal(-1);
};