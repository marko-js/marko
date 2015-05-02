require('raptor-polyfill/string/startsWith');

var loader = require('./loader');


var cache = {};

function load(path) {
    if (cache[path]) {
        return cache[path];
    }

    var taglib = loader.taglibLoader.loadTaglib(path);

    cache[path] = taglib;

    return taglib;
}

exports.load = load;
