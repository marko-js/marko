var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.clearLog();

  // Trigger a click event on the root element
  helpers.triggerMouseEvent(component.el, "click");
  assert.deepEqual(component.logOutput, ["el:click"]);

  component.clearLog();
  helpers.triggerMouseEvent(component.getEl("button"), "click");
  assert.deepEqual(component.logOutput, ["button:click", "el:click"]);

  component.clearLog();
  helpers.triggerMouseEvent(
    component.getEl("button").firstElementChild,
    "click",
  );
  assert.deepEqual(component.logOutput, ["button:click", "el:click"]);

  component.clearLog();
  helpers.triggerMouseEvent(component.el, "mousemove");
  assert.deepEqual(component.logOutput, ["el:mousemove"]);

  component.clearLog();
  helpers.triggerMouseEvent(
    component.getEl("button").firstElementChild,
    "mousemove",
  );
  assert.deepEqual(component.logOutput, [
    "button>span:mousemove",
    "el:mousemove",
  ]);

  component.clearLog();
  helpers.triggerMouseEvent(document.getElementById("fooLink"), "dblclick");
  assert.deepEqual(component.logOutput, ["#fooLink:dblclick"]);

  component.clearLog();
  helpers.triggerMouseEvent(document.getElementById("fooLink"), "mouseout");
  assert.deepEqual(component.logOutput, ["#fooLink:mouseout"]);

  component.clearLog();
  assert.equal(component.getComponent("appButton").clicked, false);
  helpers.triggerMouseEvent(component.getEl("helloWorld"), "mousedown");
  assert.deepEqual(component.logOutput, ["#helloWorld:mousedown"]);
  assert.equal(component.getComponent("appButton").clicked, true);
};
