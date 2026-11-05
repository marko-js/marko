const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );
  assert.equal(taglib != null, true);

  assert.ok("tab" in taglib.tags["longhand-tabs"].nestedTags);

  const tab = taglib.tags["longhand-tabs"].nestedTags.tab;
  assert.equal(tab.isRepeated, true);
  assert.equal(tab.targetProperty, "tabs");
  assert.ok("label" in tab.attributes);
};
