var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(window.helloInstances.length, 2);

  var helloEls = component.getEl("root").querySelectorAll(".hello");
  assert.equal(helloEls[0].innerHTML, "Hello Jane");
  assert.equal(helloEls[1].innerHTML, "Hello John0");

  var hello1 = component.getComponent("hello1");
  var hello2 = component.getComponent("hello2");

  component.state.count++;
  component.update();

  // Make sure no more instances of the nested components were created
  assert.equal(window.helloInstances.length, 2);

  // Make sure the UI components received the new state as part of onInput()
  assert.equal(hello1.state.name, "Jane");
  assert.equal(hello2.state.name, "John1");

  // Make sure the HTML elements were reused
  var helloElsAfter = component.getEl("root").querySelectorAll(".hello");
  assert.equal(helloElsAfter[0], helloEls[0]);
  assert.equal(helloElsAfter[1], helloEls[1]);

  // Make sure the DOM was updated
  assert.equal(helloElsAfter[0].innerHTML, "Hello Jane");
  assert.equal(helloElsAfter[1].innerHTML, "Hello John1");

  window.helloInstances = undefined;
};
