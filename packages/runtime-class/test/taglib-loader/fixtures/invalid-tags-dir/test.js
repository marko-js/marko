const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglibPath = nodePath.join(__dirname, "marko.json");
  var tagPath = nodePath.join(__dirname, "tags/foo/marko-tag.json");

  assert.throws(
    function () {
      taglibLoader.loadTaglibFromFile(taglibPath);
    },
    (err) => err.message.includes(`Invalid option: INVALID ([${taglibPath} → <foo> → ${tagPath}])`),
  );
};
