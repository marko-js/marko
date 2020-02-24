exports.check = function(markoCompiler, expect, snapshot) {
    var lookup = markoCompiler.buildTaglibLookup(__dirname);

    var tagNames = [];

    lookup.forEachTag(tag => {
        tagNames.push(tag.name);
    });

    snapshot(tagNames, ".json");
};
