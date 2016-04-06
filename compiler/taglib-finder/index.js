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

var taglibLoader = require('../taglib-loader');
var nodePath = require('path');
var fs = require('fs');
var existsCache = {};
var findCache = {};
var taglibsForNodeModulesDirCache = {};
var lassoPackageRoot = require('lasso-package-root');
var resolveFrom = require('resolve-from');

function existsCached(path) {
    var exists = existsCache[path];
    if (exists === undefined) {
        exists = fs.existsSync(path);
        existsCache[path] = exists;
    }
    return exists;
}

function getModuleRootPackage(dirname) {
    try {
        return lassoPackageRoot.getRootPackage(dirname);
    } catch(e) {
        return undefined;
    }
}

function getAllDependencyNames(pkg) {
    var map = {};

    if (pkg.dependencies) {
        Object.keys(pkg.dependencies).forEach((name) => {
            map[name] = true;
        });
    }

    if (pkg.peerDependencies) {
        Object.keys(pkg.peerDependencies).forEach((name) => {
            map[name] = true;
        });
    }

    if (pkg.devDependencies) {
        Object.keys(pkg.devDependencies).forEach((name) => {
            map[name] = true;
        });
    }

    return Object.keys(map);
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
        },
        foundTaglibPackages: {}
    };

    var rootDirname = process.cwd(); // Don't search up past this directory
    var rootPkg = getModuleRootPackage(dirname);
    if (rootPkg) {
        rootDirname = rootPkg.__dirname; // Use the package's root directory as the top-level directory
    }


    // First walk up the directory tree looking for marko.json files
    let curDirname = dirname;
    while(true) {
        let taglibPath = nodePath.join(curDirname, 'marko.json');
        if (existsCached(taglibPath)) {
            var taglib = taglibLoader.load(taglibPath);
            helper.addTaglib(taglib);
        }

        if (curDirname === rootDirname) {
            break;
        }

        let parentDirname = nodePath.dirname(curDirname);
        if (!parentDirname || parentDirname === curDirname) {
            break;
        }
        curDirname = parentDirname;
    }

    if (rootPkg) {
        // Now look for `marko.json` from installed packages
        getAllDependencyNames(rootPkg).forEach((name) => {
            let taglibPath;
            try {
                taglibPath = resolveFrom(rootPkg.__dirname, name + '/marko.json');
            } catch(e) {
                // The installed dependency does not export a taglib... skip it
                return;
            }

            var taglib = taglibLoader.load(taglibPath);
            helper.addTaglib(taglib);
        });
    }

    found = found.concat(registeredTaglibs);

    findCache[dirname] = found;

    return found;
}

function clearCache() {
    existsCache = {};
    findCache = {};
    taglibsForNodeModulesDirCache = {};
}

exports.find = find;
exports.clearCache = clearCache;
