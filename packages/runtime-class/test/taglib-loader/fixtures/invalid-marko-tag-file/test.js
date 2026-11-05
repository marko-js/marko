const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  assert.throws(function () {
    taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, "marko.json"));
  }, /Error while applying option of "tags-dir"/);
};
