const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );
  assert.equal(taglib != null, true);

  var shorthandCheckbox = taglib.tags["shorthand-checkbox"];
  assert.equal(shorthandCheckbox.attributes.checked.type, "boolean");
  assert.equal(shorthandCheckbox.attributes.label.type, "object");
  assert.equal(shorthandCheckbox.nestedTags.label.type, "object");
  assert.equal(shorthandCheckbox.nestedTags.foo.attributes.bar.type, "string");

  var shorthandTabsTag = taglib.tags["shorthand-tabs"];
  assert.equal(shorthandTabsTag.attributes.orientation != null, true);
  assert.equal(shorthandTabsTag.attributes.orientation.type, "string");
  assert.equal(shorthandTabsTag.attributes.tabs.type, "expression");

  var nestedTabTag = shorthandTabsTag.nestedTags.tab;
  assert.equal(nestedTabTag.attributes.label != null, true);
  assert.equal(nestedTabTag.isRepeated, true);
  assert.equal(nestedTabTag.targetProperty, "tabs");
};
