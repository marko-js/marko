import nodePath from "path";

import markoModules from "@marko/compiler/modules";
import lassoPackageRoot from "lasso-package-root";

import taglibConfig from "../config";
import * as taglibLoader from "../loader";

var findCache = new Map();
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
  return findWithMeta(dirname, registeredTaglibs, tagDiscoveryDirs).taglibs;
}

function findWithMeta(dirname, registeredTaglibs, tagDiscoveryDirs) {
  // The walk and `exclusiveTagDiscoveryDirs` depend on the translator, so a
  // mixed Marko 5/6 process must not share entries across translators. The
  // `registeredTaglibs` array identity is per translator (memoized upstream)
  // and carries `tagDiscoveryDirs` with it.
  var cachedByDirname = findCache.get(registeredTaglibs);
  if (!cachedByDirname) {
    findCache.set(registeredTaglibs, (cachedByDirname = new Map()));
  }
  var cached = cachedByDirname.get(dirname);
  if (cached) {
    return cached;
  }

  var taglibs = [];
  var added = new Set();
  var rootDirname = markoModules.cwd; // Don't search up past this directory
  var rootPkg = getModuleRootPackage(dirname);
  if (rootPkg) {
    rootDirname = rootPkg.__dirname; // Use the package's root directory as the top-level directory
  }

  // First walk up the directory tree looking for marko.json files or components/ directories
  let curDirname = dirname;
  // exclusiveTagDiscoveryDirs is used for the interop to detect if `tags` directories are used exclusively when finding tags
  let exclusiveTagDiscoveryDirs = undefined;

  while (true) {
    if (!excludedDirs[curDirname]) {
      let taglibPath = nodePath.join(curDirname, "marko.json");
      let taglib;
      let manualTagsDir;

      if (existsSync(taglibPath)) {
        taglib = taglibLoader.loadTaglibFromFile(taglibPath);
        manualTagsDir = taglib.tagsDir;
        addTaglib(taglib);
      }

      if (manualTagsDir === undefined) {
        for (const tagDiscoveryDir of tagDiscoveryDirs) {
          const componentsPath = nodePath.join(curDirname, tagDiscoveryDir);

          if (existsSync(componentsPath) && !excludedDirs[componentsPath]) {
            if (exclusiveTagDiscoveryDirs !== false) {
              if (exclusiveTagDiscoveryDirs === undefined) {
                exclusiveTagDiscoveryDirs = tagDiscoveryDir;
              } else if (exclusiveTagDiscoveryDirs !== tagDiscoveryDir) {
                exclusiveTagDiscoveryDirs = false;
              }
            }

            addTaglib(
              taglibLoader.loadTaglibFromDir(curDirname, tagDiscoveryDir),
            );
          }
        }
      } else if (manualTagsDir) {
        exclusiveTagDiscoveryDirs = false;
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
          name + "/marko.json",
          rootPkg.__dirname,
        );
        if (taglibPath) {
          // Resolving realpaths the taglib, which for a virtual store (eg pnpm) bears
          // no relation to how it is imported, so hold onto the name it resolved by.
          var taglib = taglibLoader.loadTaglibFromFile(taglibPath, true, name);
          addTaglib(taglib);
        }
      }
    });
  }

  for (let i = registeredTaglibs.length; i--;) {
    addTaglib(registeredTaglibs[i]);
  }

  cached = { exclusiveTagDiscoveryDirs, taglibs };
  cachedByDirname.set(dirname, cached);
  return cached;

  function addTaglib(taglib) {
    if (!added.has(taglib.id)) {
      added.add(taglib.id);
      taglibs.push(taglib);
    }
  }
}

find._withMeta = findWithMeta;

function clearCache() {
  findCache = new Map();
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

export { clearCache, excludeDir, excludePackage, find, reset };
