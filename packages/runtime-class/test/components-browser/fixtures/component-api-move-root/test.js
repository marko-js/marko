var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var newTarget = document.createElement("div");
  document.body.appendChild(newTarget);
  component.increment();
  component.update();
  component.appendTo(newTarget);
  assert.equal(newTarget.innerHTML, "Hello World 1");
  component.increment();
  component.update();
  assert.equal(newTarget.innerHTML, "Hello World 2");
};
