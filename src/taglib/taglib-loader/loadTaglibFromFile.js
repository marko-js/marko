var jsonFileReader = require("./json-file-reader");
var types = require("./types");
var cache = require("./cache");
var loaders = require("./loaders");

var ok = require("assert").ok;

function loadFromFile(filePath) {
    ok(filePath, '"filePath" is required');

    var taglib = cache.get(filePath);

    // Only load a taglib once by caching the loaded taglibs using the file
    // system file path as the key
    if (!taglib) {
        taglib = new types.Taglib(filePath);
        cache.put(filePath, taglib);

        var taglibProps = jsonFileReader.readFileSync(filePath);
        loaders.loadTaglibFromProps(taglib, taglibProps);
    }

    return taglib;
}

module.exports = loadFromFile;
