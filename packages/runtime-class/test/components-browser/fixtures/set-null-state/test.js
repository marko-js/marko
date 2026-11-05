"use strict";

var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.state, null);
  helpers.triggerEvent(component.getEl("button"), "click");
  assert.equal(component.state.initNull, true);
};
