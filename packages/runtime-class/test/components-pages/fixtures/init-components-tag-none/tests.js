var assert = require("assert/strict");

it("should initialize components after ready", function (done) {
  assert.equal(window.beforeInitComponentsFooComponent, undefined);
  assert.equal(window.afterInitComponentsBarComponent, undefined);

  assert.equal(window.fooComponent != null, true);
  assert.equal(window.barComponent != null, true);

  assert.equal(typeof window.fooComponent.id, "string");
  assert.equal(typeof window.barComponent.id, "string");
  assert.notEqual(window.fooComponent.id, window.barComponent.id);
  done();
});

it("should assign unique IDs to each component", function (done) {
  assert.equal(typeof window.fooComponent.id, "string");
  assert.equal(typeof window.barComponent.id, "string");
  assert.equal(typeof window.bazComponent.id, "string");
  assert.notEqual(window.fooComponent.id, window.barComponent.id);
  assert.notEqual(window.fooComponent.id, window.bazComponent.id);
  assert.ok(window.bazComponent.id.includes(window.fooComponent.id));
  done();
});

it("should assign a unique ID to a nested component based on the parent ID", function (done) {
  assert.ok(window.bazComponent.id.includes(window.fooComponent.id + "-"));
  done();
});
