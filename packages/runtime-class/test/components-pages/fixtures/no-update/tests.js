var expect = require("chai").expect;

it("should allow attributes to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-attr");
  expect(noUpdateComponent.el.getAttribute("data-foo")).to.equal("server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  expect(noUpdateComponent.el.getAttribute("data-foo")).to.equal("server");
});

it("should allow input value to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-input-value");
  expect(noUpdateComponent.el.value).to.equal("server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  expect(noUpdateComponent.el.value).to.equal("server");
});

it("should allow textarea value to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-body-textarea");
  expect(noUpdateComponent.el.value).to.equal("server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  expect(noUpdateComponent.el.value).to.equal("server");
});

it("should allow a root element to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-el");

  expect(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo")).to.equal(
    "server",
  );
  expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal("server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  expect(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo")).to.equal(
    "server",
  );
  expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal("server");
});

it("should allow a nested element to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-el-nested");

  expect(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo")).to.equal(
    "server",
  );
  expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal("server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  expect(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo")).to.equal(
    "server",
  );
  expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal("server");
});

it("should allow a body element to not be updated", function () {
  var app = window.app;
  var noUpdateComponent = app.getComponent("no-update-body-el");

  expect(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo")).to.equal(
    "server",
  );
  expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal("server");

  noUpdateComponent.input = {
    name: "browser",
  };

  noUpdateComponent.update();

  expect(noUpdateComponent.getNoUpdateEl().getAttribute("data-foo")).to.equal(
    "browser",
  );
  expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal("server");
});
