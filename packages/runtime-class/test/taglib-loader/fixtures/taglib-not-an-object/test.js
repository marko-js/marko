var nodePath = require("path");

exports.check = function (taglibLoader, expect) {
  expect(function () {
    taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, "marko.json"));
  }).to.throw(/object expected/);
};
