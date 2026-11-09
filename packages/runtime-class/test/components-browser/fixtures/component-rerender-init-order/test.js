var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    version: 0,
  });

  assert.deepEqual(window.rerenderInitOrder, [
    "childB",
    "childA",
    "parent",
  ]);

  window.rerenderInitOrder = [];

  component.input = { version: 1 };
  component.update();

  // console.log('ACTUAL ORDER: ', window.rerenderInitOrder);
  assert.deepEqual(window.rerenderInitOrder, [
    "childB",
    "childA",
    "parent",
  ]);

  window.rerenderInitOrder = null;
};
