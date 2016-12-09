var types = require('./types');

var cache = {};

function load(path) {
    // Only load a taglib once by caching the loaded taglibs using the file
    // system path as the key
    if (cache[path]) {
        return cache[path];
    }

    var taglib = cache[path] = new types.Taglib(path);

    exports.taglibLoader.loadTaglib(path, taglib);

    cache[path] = taglib;

    return taglib;
}

exports.clearCache = function() {
    cache = {};
};

exports.load = load;
exports.taglibLoader = require('./loader-taglib');
exports.tagLoader = require('./loader-tag');
exports.attributeLoader = require('./loader-attribute');