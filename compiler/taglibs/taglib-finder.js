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

require('raptor-polyfill/string/endsWith');

var taglibLoader = require('./taglib-loader');
var trailingSlashRegExp = /[\\/]$/;

var excludedDirs = {};
var excludedPackages = {};
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

                var moduleName = taglib.moduleName;
                if (moduleName && !helper.foundTaglibPackages[moduleName]) {
                    // Fixes https://github.com/marko-js/marko/issues/140
                    // If the same node_module is found multiple times then only load the first one.
                    // Only the package name (that is: node_modules/<module_name>) matters and the
                    // package version does not matter.
                    helper.addTaglib(taglib);
                }
            }
        }
        return;
    }

    if ((nodeModulesDir = realpathCached(nodeModulesDir))) {
        taglibsForNodeModulesDir = [];

        var handlePackageDir = function(packageName) {
            // Fixes https://github.com/marko-js/marko/issues/140
            // If the same node_module is found multiple times then only load the first one.
            // Only the package name (that is: node_modules/<module_name>) matters and the
            // package version does not matter.
            if (helper.foundTaglibPackages[packageName]) {
                return;
            }

            helper.foundTaglibPackages[packageName] = true;

            var moduleDir = nodePath.join(nodeModulesDir, packageName);
            var taglibPath = nodePath.join(moduleDir, 'marko-taglib.json');

            if (existsCached(taglibPath) && !excludedPackages[packageName]) {
                taglibPath = fs.realpathSync(taglibPath);

                var taglib = taglibLoader.load(taglibPath);
                taglib.moduleName = packageName;
                taglibsForNodeModulesDir.push(taglib);
                helper.addTaglib(taglib);
            }
        };

        fs.readdirSync(nodeModulesDir)
            .forEach(function(packageName) {
                if (packageName.charAt(0) === '@') {
                    // Add support for npm scoped packages. Scoped packages
                    // get instaled into subdirectories organized by user.
                    // For example:
                    // node_modules/@foo/my-package
                    // node_modules/@foo/another-package

                    var scope = packageName; // e.g. scope = '@foo'

                    // We need to loop over the nested directory to automatically
                    // discover taglibs exported by scoped packages.
                    fs.readdirSync(nodePath.join(nodeModulesDir, scope))
                        .forEach(function(packageName) {
                            handlePackageDir(scope + '/' + packageName); // @foo/my-package
                        });
                } else {
                    handlePackageDir(packageName);
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
        },
        foundTaglibPackages: {}
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

function excludePackage(packageName) {
    packageName = packageName.trim().toLowerCase();
    excludedPackages[packageName] = true;
}

exports.find = find;
exports.excludeDir = excludeDir;
exports.excludePackage = excludePackage;

exports.clearCaches = function() {
    existsCache = {};
    findCache = {};
    taglibsForNodeModulesDirCache = {};
};
