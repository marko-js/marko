const assert = require("assert/strict");

exports.verify = function (context) {
  var rootNode = context.rootNode;
  var input = rootNode.querySelector("input");
  assert.equal(input.disabled, true);
};
