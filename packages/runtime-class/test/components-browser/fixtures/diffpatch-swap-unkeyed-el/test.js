var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var children = component.getEl("root").children;
  assert.equal(children.length, 2);

  assert.equal(children[0].getAttribute("data-foo"), "true");
  assert.equal(children[0].getAttribute("data-bar"), null);

  assert.equal(children[1].getAttribute("data-foo"), null);
  assert.equal(children[1].getAttribute("data-bar"), "true");

  component.state.swapped = true;
  component.update();

  children = component.getEl("root").children;

  assert.equal(children.length, 2);

  assert.equal(children[0].getAttribute("data-foo"), null);
  assert.equal(children[0].getAttribute("data-bar"), "true");

  assert.equal(children[1].getAttribute("data-foo"), "true");
  assert.equal(children[1].getAttribute("data-bar"), null);
};
