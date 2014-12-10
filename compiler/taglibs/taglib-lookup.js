

var taglibLoader = require('./taglib-loader');
var taglibFinder = require('./taglib-finder');
var TaglibLookup = require('./TaglibLookup');

exports.registeredTaglibs = [];

var lookupCache = {};

function buildLookup(dirname) {
	var taglibs = taglibFinder.find(dirname, exports.registeredTaglibs);

	var lookupCacheKey = taglibs
		.map(function(taglib) {
			return taglib.id;
		})
		.join(',');

	var lookup = lookupCache[lookupCacheKey];
	if (lookup === undefined) {
		lookup = new TaglibLookup();

        for (var i=taglibs.length-1; i>=0; i--) {
			lookup.addTaglib(taglibs[i]);
		}

		lookupCache[lookupCacheKey] = lookup;
	}

	return lookup;
}

function registerTaglib(taglib) {
    if (typeof taglib === 'string') {
        taglib = taglibLoader.load(taglib);
    }

    exports.registeredTaglibs.push(taglib);
}

exports.excludeDir = taglibFinder.excludeDir;
exports.registerTaglib = registerTaglib;
exports.buildLookup = buildLookup;
exports.clearCaches = function() {
	lookupCache = {};
};