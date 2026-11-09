var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  assert.equal(component.events.length, 0);

  component.input = {
    colors: ["red", "blue"],
  };

  component.update();

  assert.equal(component.events.length, 1);
  assert.equal(component.events[0].color, "green");
  assert.match(component.events[0].node.innerHTML, /green/);

  component.input = {
    colors: ["red"],
  };

  component.update();

  assert.equal(component.events.length, 2);
  assert.equal(component.events[1].color, "blue");
  assert.match(component.events[1].node.innerHTML, /blue/);
};
