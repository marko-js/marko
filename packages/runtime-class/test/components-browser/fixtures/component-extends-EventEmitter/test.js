var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var fooEvent = null;
  var fooEventThis = null;

  function fooListener() {
    fooEvent = arguments;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    fooEventThis = this;
  }

  component.on("foo", fooListener);

  component.emit("foo", "a", "b");

  assert.equal(fooEvent[0], "a");

  assert.equal(fooEvent[1], "b");
  assert.equal(fooEventThis, component);

  fooEvent = null;

  component.removeListener("foo", fooListener);

  component.emit("foo", "a", "b");

  assert.equal(fooEvent, null);
};
