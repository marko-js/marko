var ok = require("assert").ok;
var nodePath = require("path");
var cache = require("./cache");
var DependencyChain = require("./DependencyChain");
var scanTagsDir = require("./scanTagsDir");
var types = require("./types");

function loadFromDir(dir, tagDiscoveryDir) {
  ok(dir, '"dir" is required');

  var componentsPath = nodePath.join(dir, tagDiscoveryDir);
  var taglib = cache.get(componentsPath);

  // Only load a taglib once by caching the loaded taglibs using the file
  // system file path as the key
  if (!taglib) {
    taglib = new types.Taglib(componentsPath);
    cache.put(componentsPath, taglib);
    scanTagsDir(
      componentsPath,
      dir,
      tagDiscoveryDir,
      taglib,
      new DependencyChain([componentsPath]),
    );
  }

  return taglib;
}

module.exports = loadFromDir;
