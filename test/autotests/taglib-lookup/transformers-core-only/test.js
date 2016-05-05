exports.check = function(taglibLookup, expect) {
    var transformers = [];

    
    var lookup = taglibLookup.buildLookup(__dirname);

    lookup.forEachTagTransformer('div', function(transformer) {
        transformers.push(transformer);
    });

    expect(transformers.length).to.equal(1);
};