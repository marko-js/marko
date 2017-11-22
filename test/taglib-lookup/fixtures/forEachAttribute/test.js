exports.check = function (markoCompiler, expect, helpers) {
    var taglibLookup = markoCompiler.taglibLookup;
    var lookup = taglibLookup.buildLookup(__dirname);

    var attrNames = [];

    lookup.forEachAttribute('foo', attr => {
        attrNames.push(attr.name);
    });

    helpers.compare(attrNames, '.json');
};