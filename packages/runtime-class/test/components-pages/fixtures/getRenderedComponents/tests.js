var assert = require("assert/strict");
var markoComponents = require("marko/components");

it("should serialize component config down to the browser", function () {
  assert.deepEqual(window.simpleComponents, []);

  var components = window.components;
  var html = components.html;
  var componentIds = components.componentIds;
  var testsTarget = document.getElementById("testsTarget");

  testsTarget.innerHTML = html; // Add the HTML to the DOM

  // Initialize the components to bind behavior!
  markoComponents.init(componentIds);

  assert.equal(window.simpleComponents.length, 2);
  assert.equal(window.simpleComponents[0].state.type, "component state");
  assert.equal(window.simpleComponents[0].state.name, "John");
  assert.equal(window.simpleComponents[0].state.messageCount, 10);
  assert.equal(window.simpleComponents[0].componentConfig.type, "component config");
  assert.equal(window.simpleComponents[0].componentConfig.name, "John");
  assert.equal(window.simpleComponents[0].componentConfig.messageCount, 10);

  assert.equal(window.simpleComponents[1].state.type, "component state");
  assert.equal(window.simpleComponents[1].state.name, "Frank");
  assert.equal(window.simpleComponents[1].state.messageCount, 20);
  assert.equal(window.simpleComponents[1].componentConfig.type, "component config");
  assert.equal(window.simpleComponents[1].componentConfig.name, "Frank");
  assert.equal(window.simpleComponents[1].componentConfig.messageCount, 20);

  testsTarget.innerHTML = html; // Reset html.
  markoComponents.init(componentIds); // Re-initialize the components.

  assert.equal(window.simpleComponents.length, 4);
});
