var assert = require("assert/strict");

it("should initialize components before ready", function () {
  assert.equal(window.afterInitComponentsFooComponent != null, true);
  assert.equal(window.afterInitComponentsBarComponent != null, true);

  assert.equal(window.fooComponent != null, true);
  assert.equal(window.barComponent != null, true);

  assert.equal(typeof window.fooComponent.id, "string");
  assert.equal(typeof window.barComponent.id, "string");
  assert.notEqual(window.fooComponent.id, window.barComponent.id);
});

it("should assign unique IDs to each component", function () {
  assert.equal(typeof window.fooComponent.id, "string");
  assert.equal(typeof window.barComponent.id, "string");
  assert.equal(typeof window.bazComponent.id, "string");
  assert.notEqual(window.fooComponent.id, window.barComponent.id);
  assert.notEqual(window.fooComponent.id, window.bazComponent.id);
  assert.ok(window.bazComponent.id.includes(window.fooComponent.id));
});

it("should assign a unique ID to a nested component based on the parent ID", function () {
  assert.ok(window.bazComponent.id.includes(window.fooComponent.id + "-"));
});

it("should serialize state correctly", function () {
  assert.equal(window.fooComponent.state.type, "state");
  assert.equal(window.fooComponent.state.name, "foo");
});

it("should serialize component config correctly", function () {
  assert.equal(window.fooComponent.componentConfig.type, "config");
  assert.equal(window.fooComponent.componentConfig.name, "foo");
});
