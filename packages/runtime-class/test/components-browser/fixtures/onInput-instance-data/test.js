var assert = require("assert/strict");

require("./component");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.string, "world");
  assert.equal(component.number, 12);
  assert.equal(component.boolean, true);
  assert.deepEqual(component.complex, {
    a: '<"hello">',
    b: "test",
  });
};
