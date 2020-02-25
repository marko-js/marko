"use strict";

const taglibFinder = require("./taglib-finder");
const taglibLookup = require("./taglib-lookup");
const taglibLoader = require("./taglib-loader");

function clearCache() {
  taglibLookup.clearCache();
  taglibFinder.clearCache();
  taglibLoader.clearCache();
}

function register(taglibProps, taglibPath) {
  const taglib = taglibLoader.createTaglib(taglibPath);
  taglibLoader.loadTaglibFromProps(taglib, taglibProps);
  taglibLookup.registerTaglib(taglib);
}

function registerFromFile(taglibPath) {
  const taglib = taglibLoader.loadTaglibFromFile(taglibPath);
  taglibLookup.registerTaglib(taglib);
}

exports.clearCache = clearCache;
exports.register = register;
exports.registerFromFile = registerFromFile;
exports.buildLookup = taglibLookup.buildLookup;
exports.excludeDir = taglibFinder.excludeDir;
exports.excludePackage = taglibFinder.excludePackage;
exports.finder = taglibFinder;
exports.lookup = taglibLookup;
exports.loader = taglibLoader;
