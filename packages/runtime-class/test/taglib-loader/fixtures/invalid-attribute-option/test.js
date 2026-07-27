var nodePath = require("path");

exports.check = function (taglibLoader, expect) {
  // Attribute properties have no catch-all handler, so an unknown one is
  // reported with both the name as written and its dash-free form.
  expect(function () {
    taglibLoader.loadTaglibFromFile(nodePath.join(__dirname, "marko.json"));
  }).to.throw(/"not-real"\/"notReal"/);
};
