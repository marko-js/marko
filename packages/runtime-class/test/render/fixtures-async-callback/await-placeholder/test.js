var assert = require("assert/strict");
const { callbackProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  testDataProvider: callbackProvider(1, { name: "Frank" }),
};

exports.checkHtml = function (html) {
  assert.match(html, /Loading main\.\.\./);
  assert.match(html, /Hello Frank/);
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
