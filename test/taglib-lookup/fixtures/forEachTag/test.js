exports.check = function (markoCompiler, expect, helpers) {
    var lookup = markoCompiler.buildTaglibLookup(__dirname);

    var tagNames = [];

    lookup.forEachTag(tag => {
        tagNames.push(tag.name);
    });

    helpers.compare(tagNames, '.json');
};