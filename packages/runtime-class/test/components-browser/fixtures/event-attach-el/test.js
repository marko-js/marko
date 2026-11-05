var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red"],
  });

  // When hydrating, the first color item was rendered on the
  // server so there is no corresponding attach event fired
  var OFFSET = helpers.isHydrate ? -1 : 0;
  if (!helpers.isHydrate) {
    assert.equal(component.events.length, 1);
    assert.equal(component.events[0].color, "red");
    assert.equal(component.events[0].node, component.el.querySelectorAll("li")[0]);
  }

  component.input = {
    colors: ["red", "blue"],
  };

  component.update();

  assert.equal(component.events.length, OFFSET + 2);
  assert.equal(component.events[OFFSET + 1].color, "blue");
  assert.equal(component.events[OFFSET + 1].node, component.el.querySelectorAll("li")[1]);

  component.input = {
    colors: ["red", "green", "blue"],
  };

  component.update();

  assert.equal(component.events.length, OFFSET + 3);
  assert.equal(component.events[OFFSET + 2].color, "green");
  assert.equal(component.events[OFFSET + 2].node, component.el.querySelectorAll("li")[1]);
};
