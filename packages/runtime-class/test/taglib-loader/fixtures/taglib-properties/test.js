const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  assert.equal(taglib.scriptLang, "ts");
  assert.deepEqual(Object.keys(taglib.tags).sort(), ["alpha", "beta"]);
  assert.equal(taglib.transformers.length, 2);
  assert.equal(taglib.migrators.length, 2);
};
