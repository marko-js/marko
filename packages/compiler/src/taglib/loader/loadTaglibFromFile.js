var ok = require("assert").ok;
var cache = require("./cache");
var jsonFileReader = require("./json-file-reader");
var loaders = require("./loaders");
var types = require("./types");

function loadFromFile(filePath, isFromPackageJson, packageName) {
  ok(filePath, '"filePath" is required');

  var taglib = cache.get(filePath);

  // Only load a taglib once by caching the loaded taglibs using the file
  // system file path as the key
  if (!taglib) {
    taglib = new types.Taglib(filePath, isFromPackageJson, packageName);
    cache.put(filePath, taglib);

    var taglibProps = jsonFileReader.readFileSync(filePath);
    loaders.loadTaglibFromProps(taglib, taglibProps);
  } else if (packageName && !taglib.packageName) {
    // The taglib may have first been loaded by walking up from a file within the
    // package itself, in which case we did not yet know the name it is installed as.
    taglib.setPackageName(packageName);
  }

  return taglib;
}

module.exports = loadFromFile;
