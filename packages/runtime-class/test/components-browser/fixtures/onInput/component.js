var assert = require("assert/strict");

module.exports = {
  onInput: function (input) {
    assert.deepEqual(input.name, "Frank");
    this.state = { count: 0 };
    this.setUpTest();
  },

  onMount: function () {
    assert.deepEqual(this.state.count, 0);
    assert.deepEqual(this.foo, "bar");
    assert.deepEqual(this.array, [1, 2, 3]);
    this.onMountCalled = true;
  },

  setUpTest: function () {
    this.foo = "bar";
    this.array = [1, 2, 3];
  },
};
