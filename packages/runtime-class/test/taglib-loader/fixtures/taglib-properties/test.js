var nodePath = require("path");

exports.check = function (taglibLoader, expect) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  expect(taglib.scriptLang).to.equal("ts");
  expect(Object.keys(taglib.tags).sort()).to.deep.equal(["alpha", "beta"]);
  expect(taglib.transformers).to.have.lengthOf(2);
  expect(taglib.migrators).to.have.lengthOf(2);
};
