var assert = require("assert/strict");

module.exports = function (helpers) {
  var counter = 0;

  var component = helpers.mount(require.resolve("./index"), {
    counter: counter,
  });

  assert.equal(helpers.targetEl.querySelector(".unpreserved-counter").innerHTML, "0");

  component.input = {
    counter: counter + 1,
  };

  component.update();

  assert.equal(helpers.targetEl.querySelector(".unpreserved-counter").innerHTML, "1");
};
