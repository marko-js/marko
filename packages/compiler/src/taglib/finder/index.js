"use strict";
var nodePath = require("path");
var lassoPackageRoot = require("lasso-package-root");
var markoModules = require("../../../modules");
var taglibConfig = require("../config");
var taglibLoader = require("../loader");
var findCache = {};
var excludedDirs = {};
var excludedPackages = {};

/**
 * Reset all internal state to the default state. This
 * was added for testing purposes.
 */
function reset() {
  clearCache();
  excludedDirs = {};
  excludedPackages = {};
}

function getModuleRootPackage(dirname) {
  try {
    return lassoPackageRoot.getRootPackage(dirname);
  } catch (e) {
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

function find(dirname, registeredTaglibs, tagDiscoveryDirs) {
  var found = findCache[dirname];
  if (found) {
    return found;
  }

  found = [];

  var added = {};

  var helper = {
    addTaglib: function (taglib) {
      if (added[taglib.id]) {
        return;
      }

      added[taglib.id] = true;
      found.push(taglib);
    },
    foundTaglibPackages: {},
  };

  var rootDirname = markoModules.cwd; // Don't search up past this directory
  var rootPkg = getModuleRootPackage(dirname);
  if (rootPkg) {
    rootDirname = rootPkg.__dirname; // Use the package's root directory as the top-level directory
  }

  // First walk up the directory tree looking for marko.json files or components/ directories
  let curDirname = dirname;

  while (true) {
    if (!excludedDirs[curDirname]) {
      let taglibPath = nodePath.join(curDirname, "marko.json");
      let taglib;

      if (existsSync(taglibPath)) {
        taglib = taglibLoader.loadTaglibFromFile(taglibPath);
        helper.addTaglib(taglib);
      }

      if (!taglib || taglib.tagsDir === undefined) {
        for (const tagDiscoveryDir of tagDiscoveryDirs) {
          const componentsPath = nodePath.join(curDirname, tagDiscoveryDir);

          if (existsSync(componentsPath) && !excludedDirs[componentsPath]) {
            helper.addTaglib(
              taglibLoader.loadTaglibFromDir(curDirname, tagDiscoveryDir),
            );
          }
        }
      }
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
      if (!excludedPackages[name]) {
        let taglibPath = markoModules.tryResolve(
          nodePath.join(name, "marko.json"),
          rootPkg.__dirname,
        );
        if (taglibPath) {
          var taglib = taglibLoader.loadTaglibFromFile(taglibPath, true);
          helper.addTaglib(taglib);
        }
      }
    });
  }

  for (let i = registeredTaglibs.length; i--; ) {
    helper.addTaglib(registeredTaglibs[i]);
  }

  findCache[dirname] = found;

  return found;
}

function clearCache() {
  findCache = {};
}

function excludeDir(dir) {
  excludedDirs[dir] = true;
}

function excludePackage(name) {
  excludedPackages[name] = true;
}

function existsSync(file) {
  try {
    taglibConfig.fs.statSync(file);
    return true;
  } catch (_) {
    return false;
  }
}

exports.reset = reset;
exports.find = find;
exports.clearCache = clearCache;
exports.excludeDir = excludeDir;
exports.excludePackage = excludePackage;
