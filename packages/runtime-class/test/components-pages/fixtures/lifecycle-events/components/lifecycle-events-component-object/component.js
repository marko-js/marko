var assert = require("assert/strict");

module.exports = {
  onCreate: function (input, out) {
    // if (typeof window !== 'undefined') {
    //     throw new Error('onCreate should not be called in the browser');
    // }
    if (this.state != null) {
      throw new Error("this.state should be undefined");
    }
    this.state = {
      events: ["onCreate"],
    };

    this.onCreateInputName = input.name;
    this.onCreateOutName = out.global.name;
  },

  onRender: function (out) {
    // if (typeof window !== 'undefined') {
    //     throw new Error('onRender should not be called in the browser');
    // }

    this.state.events.push("onRender");

    if (!out || !out.write) {
      throw new Error('"out" argument expected');
    }
  },

  onInput: function (input) {
    // if (typeof window !== 'undefined') {
    //     throw new Error('onInput should not be called in the browser');
    // }

    this.state.events.push("onInput[" + input.name + "]");
  },

  onMount: function () {
    var componentsLookup = window.components || (window.components = {});
    componentsLookup["lifecycle-events-component-object"] = this;
  },

  test: function () {
    assert.deepEqual(this.state.events, [
      "onCreate",
      "onInput[Frank]",
      "onRender",
    ]);
    assert.equal(this.onCreateInputName, "Frank");
    assert.equal(this.onCreateOutName, "FrankGlobal");
  },
};
