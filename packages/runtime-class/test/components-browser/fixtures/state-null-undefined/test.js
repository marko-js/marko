"use strict";

var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.state.nameNull, null);
  assert.equal(component.state.nameUndefined, undefined);
};
