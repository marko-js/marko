var assert = require("assert/strict");

module.exports = function (helpers) {
  var events = (window.events = []);
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red"],
  });

  // When hydrating, the first color item was rendered on the
  // server so there is no corresponding attach event fired
  var OFFSET = helpers.isHydrate ? -1 : 0;
  if (!helpers.isHydrate) {
    assert.equal(events.length, 1);
    assert.equal(events[0].color, "red");
    assert.equal(events[0].node, component.el.querySelectorAll("li")[0]);
  }

  component.input = {
    colors: ["red", "blue"],
  };

  component.update();

  assert.equal(events.length, OFFSET + 2);
  assert.equal(events[OFFSET + 1].color, "blue");
  assert.equal(events[OFFSET + 1].node, component.el.querySelectorAll("li")[1]);

  component.input = {
    colors: ["red", "green", "blue"],
  };

  component.update();

  assert.equal(events.length, OFFSET + 3);
  assert.equal(events[OFFSET + 2].color, "green");
  assert.equal(events[OFFSET + 2].node, component.el.querySelectorAll("li")[1]);
};
