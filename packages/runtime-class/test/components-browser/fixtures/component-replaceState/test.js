var assert = require("assert/strict");

module.exports = function (helpers) {
  var states = {
    original: {
      heading: "original colors",
      message: "These are primary colors!",
      colors: ["red", "green", "blue"],
    },
    new: {
      heading: "new colors",
      colors: ["orange", "yellow", "purple"],
    },
  };

  var component = helpers.mount(require.resolve("./index"), states.original);

  assert.equal(component.state.heading, states.original.heading);
  assert.equal(component.state.message, states.original.message);
  assert.deepEqual(component.state.colors, states.original.colors);

  component.replaceState(states.new);
  component.update();

  assert.equal(component.state.heading, states.new.heading);
  assert.equal(component.state.message, states.new.message); // undefined
  assert.deepEqual(component.state.colors, states.new.colors);
};
