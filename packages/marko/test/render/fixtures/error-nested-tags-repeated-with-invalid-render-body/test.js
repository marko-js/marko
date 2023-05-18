var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function (e) {
  expect(e.toString()).to.contain(
    "Render body content must come after any dynamic nested attribute tags"
  );
};
