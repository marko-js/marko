const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  var tag = taglib.tags.info;

  assert.equal(tag.openTagOnly, true);
  assert.equal(tag.description, "Documented for tooling only.");
  assert.equal(tag.deprecated, "Use <details> instead.");
};
