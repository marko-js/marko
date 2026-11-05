var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(typeof component.id, "string");
  assert.equal(typeof component.emit, "function");
  assert.equal(typeof component.on, "function");
  assert.equal(typeof component.once, "function");
  assert.equal(typeof component.subscribeTo, "function");
  assert.equal(typeof component.getElId, "function");
  assert.equal(typeof component.elId, "function");
  assert.equal(typeof component.getEl, "function");
  assert.equal(typeof component.destroy, "function");
  assert.equal(typeof component.isDestroyed, "function");
  assert.equal(typeof component.update, "function");
  assert.equal(typeof component.forceUpdate, "function");
  assert.equal(typeof component.appendTo, "function");
  assert.equal(typeof component.replace, "function");
  assert.equal(typeof component.replaceChildrenOf, "function");
  assert.equal(typeof component.insertBefore, "function");
  assert.equal(typeof component.insertAfter, "function");
  assert.equal(typeof component.prependTo, "function");
};
