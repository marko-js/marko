var assert = require("assert/strict");

module.exports = function (helpers) {
  var text = helpers.vdom.createText("Hello World");
  var textClone = text.___cloneNode();
  assert.notEqual(textClone, text);
  assert.equal(text.___nodeValue, "Hello World");
  assert.equal(textClone.___nodeValue, "Hello World");
  return text;
};
