exports.check = function (markoCompiler, expect, helpers) {
    var lookup = markoCompiler.buildTaglibLookup(__dirname);

    var tagNames = [];

    var tags = lookup.getTagsSorted();
    tags.forEach(tag => {
        tagNames.push(tag.name);
    });

    helpers.compare(tagNames, '.json');
};