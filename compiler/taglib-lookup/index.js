/*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
exports.registerTaglib = registerTaglib;
exports.buildLookup = buildLookup;
exports.clearCache = clearCache;

var taglibLoader = require('../taglib-loader');
var taglibFinder = require('../taglib-finder');
var TaglibLookup = require('./TaglibLookup');

exports.registeredTaglibs = [];

var lookupCache = {};

function handleImports(lookup, taglib) {
	if (taglib.imports) {
		for (var i=0; i<taglib.imports.length; i++) {
			var importedTaglib = taglib.imports[i];

			if (!lookup.hasTaglib(importedTaglib)) {
				lookup.addTaglib(importedTaglib);
			}
		}
	}
}

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
			handleImports(lookup, taglib);
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

function clearCache() {
	lookupCache = {};
}