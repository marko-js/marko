"use strict";

var expect = require("chai").expect;

module.exports = function(helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  expect(component.state).to.equal(null);
  helpers.triggerEvent(component.getEl("button"), "click");
  expect(component.state.initNull).to.equal(true);
};
