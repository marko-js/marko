"use strict";

var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.throws(function () {
    component.state.foo = "bar";
  }, /Cannot add property foo/);
};
