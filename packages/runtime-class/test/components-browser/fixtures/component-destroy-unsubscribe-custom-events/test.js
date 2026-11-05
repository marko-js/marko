var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var customEventsComponent = helpers.mount(
    require.resolve("./components/app-custom-events"),
    {},
  );

  var receivedEvents = [];

  component.subscribeTo(customEventsComponent).on("testEvent", function () {
    receivedEvents.push(arguments);
  });

  customEventsComponent.emitTestEvent1();
  assert.equal(receivedEvents.length, 1);
  customEventsComponent.destroy();
  customEventsComponent.emitTestEvent2();
  assert.equal(receivedEvents.length, 1);
};
