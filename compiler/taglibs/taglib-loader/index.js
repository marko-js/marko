var loader = require('./loader');

var cache = {};

function load(path) {
    // Only load a taglib once by caching the loaded taglibs using the file
    // system path as the key
    if (cache[path]) {
        return cache[path];
    }

    var taglib = loader.taglibLoader.loadTaglib(path);

    cache[path] = taglib;

    return taglib;
}

exports.load = load;
