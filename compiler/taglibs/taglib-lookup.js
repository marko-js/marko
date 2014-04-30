var nodePath = require('path');
var fs = require('fs');
var taglibLoader = require('./taglib-loader');
var existsCache = {};
var TaglibLookup = require('./TaglibLookup');

exports.registeredTaglibs = [];

var lookupCache = {};
var discoverCache = {};
var excludedDirs = {};

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
        var children = fs.readdirSync(nodeModulesDir);
        children.forEach(function(moduleDirBasename) {
            var moduleDir = nodePath.join(nodeModulesDir, moduleDirBasename);
            var taglibPath = nodePath.join(moduleDir, 'raptor-taglib.json');


            if (existsCached(taglibPath)) {
                var taglib = taglibLoader.load(taglibPath);
                taglib.moduleName = moduleDirBasename;
                discovered.push(taglib);
            }


            var stat;

            try {
                stat = fs.statSync(moduleDir);
            } catch(e) {
                return;
            }

            if (stat.isDirectory()) {
                
            }
        });
    }
}

function discoverHelper(dirname, discovered) {

    if (!excludedDirs[dirname]) {
        tryDir(dirname, discovered);
        tryNodeModules(dirname, discovered);    
    }

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

    discovered = discovered.concat(exports.registeredTaglibs);
    
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

function registerTaglib(taglib) {
    if (typeof taglib === 'string') {
        taglib = taglibLoader.load(taglib);
    }

    exports.registeredTaglibs.push(taglib);
}

function excludeDir(dirname) {
    excludedDirs[dirname] = true;
}

exports.excludeDir = excludeDir;
exports.registerTaglib = registerTaglib;
exports.buildLookup = buildLookup;