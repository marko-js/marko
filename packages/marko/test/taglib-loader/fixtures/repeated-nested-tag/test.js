var nodePath = require("path");

exports.check = function (taglibLoader, expect) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );
  expect(taglib != null).to.equal(true);

  expect(taglib.tags)
    .has.property("longhand-tabs")
    .with.property("nestedTags")
    .with.property("tab");

  const tab = taglib.tags["longhand-tabs"].nestedTags.tab;
  expect(tab).has.property("isRepeated", true);
  expect(tab).has.property("targetProperty", "tabs");
  expect(tab).has.property("attributes").with.property("label");
};
