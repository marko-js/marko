var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  // assert.equal(Array.isArray(component.___domEventListenerHandles), true);

  var el = component.el;
  var fooLink = component.getEl("fooLink");

  component.destroy();

  // assert.equal(component.___domEventListenerHandles, null);

  // Make sure the component is removed from the DOM tree

  assert.equal(el.parentNode == null, true);

  // Make sure there are no DOM event listeners
  component.clearLog();
  helpers.triggerMouseEvent(fooLink, "mouseout");
  assert.deepEqual(component.logOutput, []);
};
