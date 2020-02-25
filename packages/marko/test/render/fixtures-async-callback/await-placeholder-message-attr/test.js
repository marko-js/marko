var expect = require("chai").expect;
const { callbackProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  testDataProvider: callbackProvider(1, { name: "Frank" })
};

exports.checkHtml = function(html) {
  expect(html).to.contain("Loading main...");
  expect(html).to.contain("Hello Frank");
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
