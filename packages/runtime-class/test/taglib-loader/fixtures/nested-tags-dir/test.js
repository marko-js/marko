const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (taglibLoader) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  assert.equal(taglib != null, true);

  var tagNames = Object.keys(taglib.tags).sort();

  // Tags directly in `tags/`, in tag directories, and grouped one level
  // deep beneath a non-tag directory should all be discovered. Only a
  // *leading* dot is ignored, so a name like `legacy.v1` is still crawled.
  assert.deepEqual(tagNames, [
    "icon-chevron",
    "icon-plus",
    "my-button",
    "my-input",
    "old-thing",
    "top-level",
  ]);

  // Grouping directories themselves are not tags.
  assert.ok(!("icons" in taglib.tags));

  // Discovery stops at directories that are themselves tags, so files
  // nested inside a tag directory are never picked up.
  assert.ok(!("example-usage" in taglib.tags));
  assert.ok(!("ignored" in taglib.tags));

  // Grouping only goes one level deep, so a directory nested inside a
  // group is not crawled.
  assert.ok(!("deep-icon" in taglib.tags));

  // `tags` and `components` folders are never crawled; they stay private to
  // their location (resolved via the finder's directory walk-up instead).
  assert.ok(!("private-global" in taglib.tags));
  assert.ok(!("private-comp" in taglib.tags));

  // Dot-directories are skipped.
  assert.ok(!("hidden-thing" in taglib.tags));

  // The grouped tag resolves to the correct template path.
  assert.equal(taglib.tags["icon-chevron"].template, nodePath.join(__dirname, "tags/icons/icon-chevron.marko"));
};
