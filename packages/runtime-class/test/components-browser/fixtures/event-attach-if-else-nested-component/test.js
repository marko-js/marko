var assert = require("assert/strict");

module.exports = function (helpers) {
  var colors = ["blue", "green", "red"];
  var component = helpers.mount(require.resolve("./index"), {
    color: colors[0],
  });

  if (helpers.isHydrate) {
    // When hydrating, the first color item was rendered on the
    // server so there is no corresponding attach event f
    // we'll push an empty event so the indexes line up
    component.events.push(null);
  } else {
    assert.equal(component.events.length, 1);
    assert.equal(component.events[0].color, "blue");
    assert.equal(component.events[0].node, component.el.querySelectorAll("li")[0]);
  }

  component.input = { color: colors[1] };
  component.update();

  assert.equal(component.events.length, 2);
  assert.equal(component.events[1].color, colors[1]);
  assert.equal(component.events[1].node, component.el.querySelectorAll("li")[0]);

  component.input = { color: colors[2] };
  component.update();

  assert.equal(component.events.length, 3);
  assert.equal(component.events[2].color, colors[2]);
  assert.equal(component.events[2].node, component.el.querySelectorAll("li")[0]);

  component.input = { color: colors[0] };
  component.update();

  assert.equal(component.events.length, 4);
  assert.equal(component.events[3].color, colors[0]);
  assert.equal(component.events[3].node, component.el.querySelectorAll("li")[0]);

  component.input = { color: colors[2] };
  component.update();

  assert.equal(component.events.length, 5);
  assert.equal(component.events[4].color, colors[2]);
  assert.equal(component.events[4].node, component.el.querySelectorAll("li")[0]);
};
