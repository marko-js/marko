var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    name: "Frank",
  });

  assert.match(component.el.innerHTML, /Hello Frank!/);

  component.setName("Jane");
  component.update();

  assert.match(component.el.innerHTML, /Hello Jane!/);
};
