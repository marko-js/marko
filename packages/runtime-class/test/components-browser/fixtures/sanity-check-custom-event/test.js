var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    name: "Frank",
  });

  assert.equal(component.fooEvent.length, 3);
  assert.equal(component.fooEvent[0], "abc");
  assert.equal(component.fooEvent[1], "123");
  assert.equal(component.fooEvent[2], component.fooComponent);
};
