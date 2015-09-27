require('raptor-polyfill/string/endsWith');

var taglibLoader = require('./taglib-loader');
var trailingSlashRegExp = /[\\/]$/;

var excludedDirs = {};
var nodePath = require('path');
var fs = require('fs');
var existsCache = {};
var findCache = {};
var taglibsForNodeModulesDirCache = {};

var realpathCache = {};

function existsCached(path) {
    var exists = existsCache[path];
    if (exists === undefined) {
        exists = fs.existsSync(path);
        existsCache[path] = exists;
    }
    return exists;
}

function realpathCached(path) {
    var realPath = realpathCache[path];
    if (realPath === undefined) {
        try {
            realPath = fs.realpathSync(path);
        } catch(e) {
            realPath = null;
        }

        realpathCache[path] = realPath;
    }
    return realPath;
}

function tryDir(dirname, helper) {
    var taglibPath = nodePath.join(dirname, 'marko-taglib.json');
    if (existsCached(taglibPath)) {
        var taglib = taglibLoader.load(taglibPath);
        helper.addTaglib(taglib);
    }
}

function tryNodeModules(parent, helper) {
    if (nodePath.basename(parent) === 'node_modules') {
        return;
    }

    var nodeModulesDir = nodePath.join(parent, 'node_modules');

    var taglibsForNodeModulesDir = taglibsForNodeModulesDirCache[nodeModulesDir];
    if (taglibsForNodeModulesDir !== undefined) {
        if (taglibsForNodeModulesDir !== null) {
            for (var i = 0, len = taglibsForNodeModulesDir.length; i < len; i++) {
                var taglib = taglibsForNodeModulesDir[i];
                helper.addTaglib(taglib);
            }
        }
        return;
    }

    if ((nodeModulesDir = realpathCached(nodeModulesDir))) {
        taglibsForNodeModulesDir = [];
        var children = fs.readdirSync(nodeModulesDir);
        children.forEach(function(moduleDirBasename) {
            var moduleDir = nodePath.join(nodeModulesDir, moduleDirBasename);
            var taglibPath = nodePath.join(moduleDir, 'marko-taglib.json');

            if (existsCached(taglibPath)) {
                taglibPath = fs.realpathSync(taglibPath);

                var taglib;
                try {
                    taglib = taglibLoader.load(taglibPath);
                } catch(e) {
                    console.warn('Warning: Unable to load taglib at path "' + taglibPath + '".  Skipping. Exception:', e.stack || e);
                }

                if (taglib) {
                    taglib.moduleName = moduleDirBasename;
                    taglibsForNodeModulesDir.push(taglib);
                    helper.addTaglib(taglib);
                }
            }
        });

        taglibsForNodeModulesDirCache[nodeModulesDir] = taglibsForNodeModulesDir.length ? taglibsForNodeModulesDir : null;
    } else {
        taglibsForNodeModulesDirCache[nodeModulesDir] = null;
    }
}

function findHelper(dirname, helper) {
    if (dirname.length !== 1) {
        dirname = dirname.replace(trailingSlashRegExp, '');
    }

    if (!excludedDirs[dirname]) {
        tryDir(dirname, helper);
        tryNodeModules(dirname, helper);
    }

    var parent = nodePath.dirname(dirname);
    if (parent && parent !== dirname) {
        // TODO: Don't use recursion (there's a simpler way)
        findHelper(parent, helper);
    }
}

function find(dirname, registeredTaglibs) {
    var found = findCache[dirname];
    if (found) {
        return found;
    }

    found = [];

    var added = {};

    var helper = {
        alreadyAdded: function(taglibPath) {
            return added.hasOwnProperty(taglibPath);
        },
        addTaglib: function(taglib) {
            if (added[taglib.path]) {
                return;
            }

            added[taglib.path] = true;
            found.push(taglib);
        }
    };

    findHelper(dirname, helper);

    found = found.concat(registeredTaglibs);

    findCache[dirname] = found;

    return found;
}

function excludeDir(dirname) {

    dirname = dirname.replace(trailingSlashRegExp, '');
    excludedDirs[dirname] = true;
}

exports.find = find;
exports.excludeDir = excludeDir;

exports.clearCaches = function() {
    existsCache = {};
    findCache = {};
    taglibsForNodeModulesDirCache = {};
};