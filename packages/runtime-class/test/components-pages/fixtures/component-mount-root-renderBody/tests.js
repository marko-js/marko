var assert = require("assert/strict");

function triggerMouseEvent(el, type) {
  var ev = document.createEvent("MouseEvent");
  ev.initMouseEvent(
    type,
    true /* bubble */,
    true /* cancelable */,
    window,
    null,
    0,
    0,
    0,
    0 /* coordinates */,
    false,
    false,
    false,
    false /* modifier keys */,
    0 /*left*/,
    null,
  );
  el.dispatchEvent(ev);
}

function triggerClick(el) {
  triggerMouseEvent(el, "click");
}

it("should mount all components", function () {
  var app = window.app;
  assert.equal(app != null, true);
  assert.equal(window.hello != null, true);
});

it("should have correct input", function () {
  assert.equal(window.app.input.name, "App");
  assert.equal(window.hello.input.name, "Marko");
});

it("should attach DOM events", function () {
  var app = window.app;
  triggerClick(app.el);
  assert.equal(app.clicked, true);

  var helloComponent = window.hello;
  triggerClick(helloComponent.el);
  assert.equal(helloComponent.clicked, true);
});
