var ok = require("assert").ok;
var cache = require("./cache");
var jsonFileReader = require("./json-file-reader");
var loaders = require("./loaders");
var types = require("./types");

function loadTagFromFile(filePath) {
  ok(filePath, '"filePath" is required');

  var tag = cache.get(filePath);

  // Only load a tag once by caching the loaded tags using the file
  // system file path as the key
  if (!tag) {
    tag = new types.Tag(filePath);
    cache.put(filePath, tag);

    var tagProps = jsonFileReader.readFileSync(filePath);
    loaders.loadTagFromProps(tag, tagProps);
  }

  return tag;
}

module.exports = loadTagFromFile;
