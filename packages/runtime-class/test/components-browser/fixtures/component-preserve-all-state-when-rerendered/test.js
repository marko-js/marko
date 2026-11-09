var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    count: 30,
  });

  var targetEl = component.el;

  assert.match(targetEl.innerHTML, /Hello Frank! You have 30 new messages\./);
  assert.match(targetEl.innerHTML, /foo: bar/);
  assert.match(targetEl.innerHTML, /hello: world/);
  assert.equal(component.state.name, "Frank");
  assert.equal(component.state.count, 30);

  component.setState("name", "John");
  component.update();

  assert.match(targetEl.innerHTML, /Hello John! You have 30 new messages\./);
  assert.match(targetEl.innerHTML, /foo: bar/);
  assert.match(targetEl.innerHTML, /hello: world/);
  assert.equal(component.state.name, "John");
  assert.equal(component.state.count, 30);
};
