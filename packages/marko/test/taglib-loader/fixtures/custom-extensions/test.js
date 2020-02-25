var nodePath = require("path");

exports.check = function(taglibLoader, expect) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json")
  );

  expect(taglib != null).to.equal(true);
  expect(taglib)
    .to.have.property("tags")
    .with.property("test-declared-attributes")
    .with.property("renderer")
    .to.contain("renderer.js");
};
