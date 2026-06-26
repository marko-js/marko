var nodePath = require("path");

exports.check = function (taglibLoader, expect) {
  var taglib = taglibLoader.loadTaglibFromFile(
    nodePath.join(__dirname, "marko.json"),
  );

  expect(taglib != null).to.equal(true);

  var tagNames = Object.keys(taglib.tags).sort();

  // Tags directly in `tags/`, in tag directories, and grouped one level
  // deep beneath a non-tag directory should all be discovered. Only a
  // *leading* dot is ignored, so a name like `legacy.v1` is still crawled.
  expect(tagNames).to.eql([
    "icon-chevron",
    "icon-plus",
    "my-button",
    "my-input",
    "old-thing",
    "top-level",
  ]);

  // Grouping directories themselves are not tags.
  expect(taglib.tags).to.not.have.property("icons");

  // Discovery stops at directories that are themselves tags, so files
  // nested inside a tag directory are never picked up.
  expect(taglib.tags).to.not.have.property("example-usage");
  expect(taglib.tags).to.not.have.property("ignored");

  // Grouping only goes one level deep, so a directory nested inside a
  // group is not crawled.
  expect(taglib.tags).to.not.have.property("deep-icon");

  // `tags` and `components` folders are never crawled; they stay private to
  // their location (resolved via the finder's directory walk-up instead).
  expect(taglib.tags).to.not.have.property("private-global");
  expect(taglib.tags).to.not.have.property("private-comp");

  // Dot-directories are skipped.
  expect(taglib.tags).to.not.have.property("hidden-thing");

  // The grouped tag resolves to the correct template path.
  expect(taglib.tags["icon-chevron"].template).to.equal(
    nodePath.join(__dirname, "tags/icons/icon-chevron.marko"),
  );
};
