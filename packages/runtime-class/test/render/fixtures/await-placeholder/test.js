var assert = require("assert/strict");

exports.templateData = {
  testDataProvider: Promise.resolve({ name: "Frank" }),
};

exports.checkHtml = function (html) {
  assert.match(html, /Loading main\.\.\./);
  assert.match(html, /Hello Frank/);
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
