exports.check = function(markoCompiler, expect, snapshot) {
    var lookup = markoCompiler.buildTaglibLookup(__dirname);

    var tagNames = [];

    var tags = lookup.getTagsSorted();
    tags.forEach(tag => {
        tagNames.push(tag.name);
    });

    snapshot(tagNames, ".json");
};
