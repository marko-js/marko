var assert = require("assert/strict");

module.exports = function (helpers) {
  var counter = 0;

  var component = helpers.mount(require.resolve("./index"), {
    counter: counter,
  });

  assert.equal(component.el.querySelector(".unpreserved-counter").innerHTML, "0");
  assert.equal(component.getEl("preserve").getAttribute("data-counter"), "0");
  assert.equal(component.el.querySelector(".preserved-counter").innerHTML, "0");

  component.input = {
    counter: counter + 1,
  };

  component.update();

  assert.equal(component.el.querySelector(".unpreserved-counter").innerHTML, "1");
  assert.equal(component.getEl("preserve").getAttribute("data-counter"), "1");
  assert.equal(component.el.querySelector(".preserved-counter").innerHTML, "0");
};
