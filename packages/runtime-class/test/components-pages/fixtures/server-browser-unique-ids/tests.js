var assert = require("assert/strict");
var appFooComponent = require("./components/app-foo").default;

it("should generate a unique ID that is different for a UI component rendered on the server and browser", function () {
  var serverFooComponent = window.fooComponent;
  var browserFooComponent = appFooComponent
    .renderSync({})
    .appendTo(document.body)
    .getComponent();
  assert.equal(typeof browserFooComponent.id, "string");
  assert.equal(typeof serverFooComponent.id, "string");
  assert.notEqual(serverFooComponent.id, browserFooComponent.id);
});
