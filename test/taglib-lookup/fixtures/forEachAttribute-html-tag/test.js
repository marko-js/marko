exports.check = function (markoCompiler, expect, helpers) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);

    var hasHrefAttr = false;

    lookup.forEachAttribute('a', attr => {
        if (attr.name === 'href') {
            hasHrefAttr = true;
        }
    });

    expect(hasHrefAttr).to.equal(true);
};