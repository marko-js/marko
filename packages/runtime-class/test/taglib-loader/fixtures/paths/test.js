const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  assert.equal(taglib != null, true);

  assert.equal(taglib.filePath, nodePath.join(__dirname, "marko.json"));

  var helloTagScanned = taglib.tags["test-hello-scanned"];
  assert.equal(helloTagScanned.filePath, nodePath.join(__dirname, "tags/test-hello-scanned/marko-tag.json"));
  assert.equal(helloTagScanned.dir, nodePath.join(__dirname, "tags/test-hello-scanned"));
  assert.equal(helloTagScanned.attributes.name.filePath, nodePath.join(__dirname, "tags/test-hello-scanned/marko-tag.json"));

  var helloTag = taglib.tags["test-hello"];
  assert.equal(helloTag.filePath, nodePath.join(__dirname, "marko.json"));
  assert.equal(helloTag.dir, __dirname);
  assert.equal(helloTag.attributes.name.filePath, nodePath.join(__dirname, "marko.json"));
};
