var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    firstName: "John",
    lastName: "Doe",
  });

  assert.match(component.el.innerHTML, /Hello John Doe!/);

  component.input = {
    firstName: "Jane",
    lastName: "Doe",
  };

  component.update();

  assert.match(component.el.innerHTML, /Hello Jane Doe!/);
};
