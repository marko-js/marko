var nodePath = require("path");
var types = require("./types");
var cache = require("./cache");
var DependencyChain = require("./DependencyChain");
var scanTagsDir = require("./scanTagsDir");

var ok = require("assert").ok;

function loadFromDir(dir) {
  ok(dir, '"dir" is required');

  var componentsPath = nodePath.join(dir, "components");
  var taglib = cache.get(componentsPath);

  // Only load a taglib once by caching the loaded taglibs using the file
  // system file path as the key
  if (!taglib) {
    taglib = new types.Taglib(componentsPath);
    cache.put(componentsPath, taglib);
    scanTagsDir(
      componentsPath,
      dir,
      "components",
      taglib,
      new DependencyChain([componentsPath])
    );
  }

  return taglib;
}

module.exports = loadFromDir;
