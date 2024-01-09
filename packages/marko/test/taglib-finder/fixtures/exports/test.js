var expect = require("chai").expect;

exports.check = function (taglibFinder) {
  const discoveredTags = taglibFinder
    .find(__dirname, [])
    .flatMap((taglib) => Object.keys(taglib.tags));

  expect(discoveredTags).to.include("included-tag");
  expect(discoveredTags).to.include("dev-tag");
  expect(discoveredTags).to.not.include("dist-tag");
};
