

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
		// The taglibs "closer" to the template will be earlier in the list
		// and the taglibs "farther" from the template will be later. We
		// want closer taglibs to take precedence (especially when de-duping)
		// so we loop from beginning to end. We used to loop from the end
		// to the beginning, but that appears to have been a mistake.
        for (var i=0; i<taglibs.length; i++) {
			var taglib = taglibs[i];
			lookup.addTaglib(taglib);

			if (taglib.imports) {
				for (var j=0; j<taglib.imports.length; j++) {
					var importedTaglib = taglibLoader.load(taglib.imports[j]);
					lookup.addTaglib(importedTaglib);
				}
			}
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