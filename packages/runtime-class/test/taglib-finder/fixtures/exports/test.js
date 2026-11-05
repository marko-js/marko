var assert = require("assert/strict");

exports.check = function (taglibFinder) {
  const discoveredTags = taglibFinder
    .find(__dirname, [], ["components"])
    .flatMap((taglib) => Object.keys(taglib.tags));

  assert.ok(discoveredTags.includes("included-tag"));
  assert.ok(discoveredTags.includes("dev-tag"));
  assert.ok(!discoveredTags.includes("dist-tag"));
};
