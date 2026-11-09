const assert = require("assert/strict");

exports.verify = function (context) {
  var rootNode = context.rootNode;
  var selectNode = rootNode.querySelector("select");
  assert.equal(selectNode.selectedIndex, 2);
};
