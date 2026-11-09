const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  assert.equal(taglib != null, true);
  assert.match(taglib.tags["test-declared-attributes"].renderer, /renderer\.js/);
};
