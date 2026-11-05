var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), { show: false });
  var container = component.getComponent("container");

  container.state.show = true;
  container.update();

  var eventTarget = helpers.targetEl.querySelector("#eventTarget");
  var eventFired = false;

  component.on("eventFired", function () {
    eventFired = true;
  });

  eventTarget.focus();
  assert.equal(eventFired, true);
};
