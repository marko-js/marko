var assert = require("assert/strict");

it("should allow attributes to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-attr");
  assert.equal(noUpdateComponent.el.getAttribute("data-foo"), "server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  assert.equal(noUpdateComponent.el.getAttribute("data-foo"), "server");
});

it("should allow input value to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-input-value");
  assert.equal(noUpdateComponent.el.value, "server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  assert.equal(noUpdateComponent.el.value, "server");
});

it("should allow textarea value to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-body-textarea");
  assert.equal(noUpdateComponent.el.value, "server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  assert.equal(noUpdateComponent.el.value, "server");
});

it("should allow a root element to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-el");

  assert.equal(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo"), "server");
  assert.equal(noUpdateComponent.getNoUpdateEl().innerHTML, "server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  assert.equal(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo"), "server");
  assert.equal(noUpdateComponent.getNoUpdateEl().innerHTML, "server");
});

it("should allow a nested element to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-el-nested");

  assert.equal(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo"), "server");
  assert.equal(noUpdateComponent.getNoUpdateEl().innerHTML, "server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  assert.equal(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo"), "server");
  assert.equal(noUpdateComponent.getNoUpdateEl().innerHTML, "server");
});

it("should allow a body element to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-body-el");

  assert.equal(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo"), "server");
  assert.equal(noUpdateComponent.getNoUpdateEl().innerHTML, "server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  assert.equal(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo"), "browser");
  assert.equal(noUpdateComponent.getNoUpdateEl().innerHTML, "server");
});
