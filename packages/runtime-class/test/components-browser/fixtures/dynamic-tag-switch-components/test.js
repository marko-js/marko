var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.helloReceived, false);
  assert.equal(component.goodByeReceived, false);

  helpers.targetEl.querySelector("button").click();

  assert.equal(component.helloReceived, true);
  assert.equal(component.goodByeReceived, false);

  component.toggle();
  component.update();

  assert.equal(component.helloReceived, true);
  assert.equal(component.goodByeReceived, false);

  helpers.targetEl.querySelector("button").click();

  assert.equal(component.helloReceived, true);
  assert.equal(component.goodByeReceived, true);
};
