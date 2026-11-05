var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var children;

  children = component.getEl("root").children;
  assert.equal(children.length, 2);
  assert.equal(children[0].innerHTML, "foo-a");
  assert.equal(children[1].innerHTML, "bar-b");

  component.state.count++;
  component.update();

  children = component.getEl("root").children;
  assert.equal(children.length, 3);
  assert.equal(children[0].innerHTML, "foo-a");
  assert.equal(children[1].innerHTML, "foo-b");
  assert.equal(children[2].innerHTML, "bar-c");
};
