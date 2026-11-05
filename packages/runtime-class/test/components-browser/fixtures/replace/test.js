var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  var hello = require("./components/hello").default;

  var targetEl = component.getEl("target");
  hello.renderSync({ name: "John" }).replace(targetEl);

  assert.equal(component.el.firstElementChild.className, "hello");
  assert.equal(component.el.firstElementChild.innerHTML, "Hello John");
};
