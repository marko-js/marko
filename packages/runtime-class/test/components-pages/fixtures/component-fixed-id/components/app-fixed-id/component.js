var assert = require("assert/strict");

module.exports = {
  onInput: function (input) {
    this.label = input.label || "app-fixed-id";
  },

  onMount: function () {
    this.name = "app-fixed-id";
    window.appFixedId = this;
  },
  testGetComponent: function () {
    var helloComponent = this.getComponent("hello");
    assert.equal(helloComponent != null, true);
  },
  testGetEl: function () {
    var wrapperEl = this.getEl("wrapper");
    assert.equal(wrapperEl != null, true);
  },
};
