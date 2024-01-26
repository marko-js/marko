var cache = require("./cache");

var types = require("./types");
var loaders = require("./loaders");
var DependencyChain = require("./DependencyChain");

function loadTaglibFromProps(taglib, taglibProps) {
  return loaders.loadTaglibFromProps(taglib, taglibProps);
}

function loadTaglibFromFile(filePath, isFromPackageJson) {
  return loaders.loadTaglibFromFile(filePath, isFromPackageJson);
}

function loadTaglibFromDir(filePath) {
  return loaders.loadTaglibFromDir(filePath);
}

function clearCache() {
  cache.clear();
}

function createTaglib(filePath) {
  return new types.Taglib(filePath);
}

function loadTag(tagProps, filePath) {
  var tag = new types.Tag(filePath);
  loaders.loadTagFromProps(
    tag,
    tagProps,
    new DependencyChain(filePath ? [filePath] : [])
  );
  return tag;
}

exports.clearCache = clearCache;
exports.createTaglib = createTaglib;
exports.loadTaglibFromProps = loadTaglibFromProps;
exports.loadTaglibFromFile = loadTaglibFromFile;
exports.loadTaglibFromDir = loadTaglibFromDir;
exports.loadTag = loadTag;
