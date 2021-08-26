var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.clearLog();
  helpers.triggerMouseEvent(document.getElementById("dom-button"), "click");
  helpers.triggerMouseEvent(document.getElementById("custom-button"), "click");
  expect(component.logOutput).to.deep.equal(["dom:click", "custom:click"]);

  helpers.triggerMouseEvent(document.getElementById("toggle"), "click");
  component.update();

  component.clearLog();
  helpers.triggerMouseEvent(document.getElementById("dom-button"), "click");
  helpers.triggerMouseEvent(document.getElementById("custom-button"), "click");
  expect(component.logOutput).to.deep.equal([]);
};
