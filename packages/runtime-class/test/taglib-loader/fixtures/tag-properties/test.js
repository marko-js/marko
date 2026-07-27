var nodePath = require("path");

exports.check = function (taglibLoader, expect) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  var tag = taglib.tags.info;

  expect(tag).to.have.property("openTagOnly").to.equal(true);
  expect(tag)
    .to.have.property("description")
    .to.equal("Documented for tooling only.");
  expect(tag).to.have.property("deprecated").to.equal("Use <details> instead.");
};
