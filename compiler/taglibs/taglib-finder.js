var taglibLoader = require('./taglib-loader');

var excludedDirs = {};
var nodePath = require('path');
var fs = require('fs');
var existsCache = {};
var findCache = {};
var taglibsByPath = {};

function existsCached(path) {
    var exists = existsCache[path];
    if (exists === undefined) {
        exists = fs.existsSync(path);
        existsCache = exists;
    }
    return exists;
}

function tryDir(dirname, found) {
    var taglibPath = nodePath.join(dirname, 'marko-taglib.json');
    if (existsCached(taglibPath)) {
        var taglib = taglibLoader.load(taglibPath);
        found.push(taglib);
    }
}

function tryNodeModules(parent, found) {
    if (nodePath.basename(parent) === 'node_modules') {
        return;
    }

    var nodeModulesDir = nodePath.join(parent, 'node_modules');

    var taglibs = taglibsByPath[nodeModulesDir];
    if (taglibs !== undefined) {
        if (taglibs !== null) {
            for (var i = 0, len = taglibs.length; i < len; i++) {
                found.push(taglibs[i]);
            }
        }
        return;
    }

    if (existsCached(nodeModulesDir)) {
        taglibs = [];
        var children = fs.readdirSync(nodeModulesDir);
        children.forEach(function(moduleDirBasename) {
            var moduleDir = nodePath.join(nodeModulesDir, moduleDirBasename);
            var taglibPath = nodePath.join(moduleDir, 'marko-taglib.json');


            if (existsCached(taglibPath)) {
                var taglib = taglibLoader.load(taglibPath);
                taglib.moduleName = moduleDirBasename;
                taglibs.push(taglib);
                found.push(taglib);
            }
        });

        taglibsByPath[nodeModulesDir] = taglibs.length ? taglibs : null;
    } else {
        taglibsByPath[nodeModulesDir] = null;
    }
}

function findHelper(dirname, found) {

    if (!excludedDirs[dirname]) {
        tryDir(dirname, found);
        tryNodeModules(dirname, found);
    }

    var parent = nodePath.dirname(dirname);
    if (parent && parent !== dirname) {
        // TODO: Don't use recursion (there's a simpler way)
        findHelper(parent, found);
    }
}

function find(dirname, registeredTaglibs) {

    var found = findCache[dirname];
    if (found) {
        return found;
    }

    found = [];

    findHelper(dirname, found);

    found = found.concat(registeredTaglibs);

    findCache[dirname] = found;

    return found;
}

function excludeDir(dirname) {
    excludedDirs[dirname] = true;
}

exports.find = find;
exports.excludeDir = excludeDir;