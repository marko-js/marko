var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  assert.equal(helpers.targetEl.querySelectorAll(".color").length, 3);

  var redComponent = component.getComponent("red");
  var greenComponent = component.getComponent("green");
  var blueComponent = component.getComponent("blue");

  var redEl = redComponent.getEl("root");
  var greenEl = greenComponent.getEl("root");
  var blueEl = blueComponent.getEl("root");

  var ul = component.getEl("root");
  assert.equal(ul != null, true);

  assert.equal(redEl.parentNode, ul);
  assert.equal(greenEl.parentNode, ul);
  assert.equal(blueEl.parentNode, ul);

  component.input = { colors: ["red", "green"] };
  component.update();

  assert.equal(redEl.parentNode, ul);
  assert.equal(greenEl.parentNode, ul);
  assert.equal(blueEl.parentNode, ul);

  assert.equal(helpers.targetEl.querySelectorAll(".color").length, 3);

  assert.equal(redComponent.detachEvent == null, true);
  assert.equal(greenComponent.detachEvent == null, true);
  assert.equal(blueComponent.detachEvent != null, true);

  blueComponent.detachEvent.detach();

  assert.equal(helpers.targetEl.querySelectorAll(".color").length, 2);
};
