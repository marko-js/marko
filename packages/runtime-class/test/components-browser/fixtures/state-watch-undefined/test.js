var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.match(component.el.innerHTML, /Hello !/);
  component.state.name = "Frank";
  component.update();
  assert.match(component.el.innerHTML, /Hello Frank!/);
};
