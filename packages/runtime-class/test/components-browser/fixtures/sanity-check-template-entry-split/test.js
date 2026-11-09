var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    name: "Frank",
  });

  assert.match(component.el.innerHTML, /FRANK/);

  component.setName("Jane");

  assert.match(component.el.innerHTML, /Jane/);
};
