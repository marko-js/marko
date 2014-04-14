var nodePath = require('path');
var fs = require('fs');
var taglibLoader = require('./taglib-loader');
var existsCache = {};
var File = require('raptor-files/File');
var TaglibLookup = require('./TaglibLookup');

exports.coreTaglibs = [];

var lookupCache = {};
var discoverCache = {};

function existsCached(path) {
    var exists = existsCache[path];
    if (exists === undefined) {
        exists = fs.existsSync(path);
        existsCache = exists;
    }
    return exists;
}

function tryDir(dirname, discovered) {
    var taglibPath = nodePath.join(dirname, 'raptor-taglib.json');
    if (existsCached(taglibPath)) {
        var taglib = taglibLoader.load(taglibPath);

        discovered.push(taglib);
    }
}

function tryNodeModules(parent, discovered) {
    if (nodePath.basename(parent) === 'node_modules') {
        return;
    }
    
    var nodeModulesDir = nodePath.join(parent, 'node_modules');
    if (existsCached(nodeModulesDir)) {
        var file = new File(nodeModulesDir);
        var children = file.listFiles();
        children.forEach(function(moduleDir) {
            if (moduleDir.isDirectory()) {
                var taglibPath = nodePath.join(moduleDir.getAbsolutePath(), 'raptor-taglib.json');
                if (existsCached(taglibPath)) {
                    var taglib = taglibLoader.load(taglibPath);
                    taglib.moduleName = moduleDir.getName();
                    discovered.push(taglib);
                }
            }
        });
    }
}

function discoverHelper(dirname, discovered) {
    tryDir(dirname, discovered);
    tryNodeModules(dirname, discovered);

    var parent = nodePath.dirname(dirname);
    if (parent && parent !== dirname) {
        discoverHelper(parent, discovered);   
    }
}

function discover(dirname) {

    var discovered = discoverCache[dirname];
    if (discovered) {
        return discovered;
    }

    discovered = [];

    discoverHelper(dirname, discovered);

    discovered = discovered.concat(exports.coreTaglibs);


    
    discoverCache[dirname] = discovered;

    return discovered;
}

function buildLookup(dirname) {
	var taglibs = discover(dirname);

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

function addCoreTaglib(taglib) {
    exports.coreTaglibs.push(taglib);
}

addCoreTaglib(taglibLoader.load(nodePath.join(__dirname, '../../taglibs/core/raptor-taglib.json')));
addCoreTaglib(taglibLoader.load(nodePath.join(__dirname, '../../taglibs/html/raptor-taglib.json')));
addCoreTaglib(taglibLoader.load(nodePath.join(__dirname, '../../taglibs/caching/raptor-taglib.json')));
addCoreTaglib(taglibLoader.load(nodePath.join(__dirname, '../../taglibs/layout/raptor-taglib.json')));
addCoreTaglib(taglibLoader.load(nodePath.join(__dirname, '../../taglibs/async/raptor-taglib.json')));

exports.buildLookup = buildLookup;