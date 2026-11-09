var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    messageCount: 30,
  });

  assert.match(component.el.innerHTML, /Frank/);
  assert.match(component.el.innerHTML, /30/);

  component.setName("John");
  component.update();

  assert.doesNotMatch(component.el.innerHTML, /John/);
  assert.match(component.el.innerHTML, /Frank/);
  assert.match(component.el.innerHTML, /30/);
};
