const assert = require("assert/strict");

exports.verify = function (context) {
  var rootNode = context.rootNode;
  var button = rootNode.querySelector("button");
  assert.equal(button.disabled, true);
};
