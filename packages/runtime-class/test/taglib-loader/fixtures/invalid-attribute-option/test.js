const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  // Attribute properties have no catch-all handler, so an unknown one is
  // reported with both the name as written and its dash-free form.
  assert.throws(function () {
    taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, "marko.json"));
  }, /"not-real"\/"notReal"/);
};
