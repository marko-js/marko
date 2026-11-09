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

it("should invoke event handler method for non-bubbling events", function () {
  window.fooComponent.mouseMoveEvent = null;
  triggerMouseEvent(window.fooComponent.getEl("button"), "mousemove");
  assert.equal(window.fooComponent.mouseMoveEvent != null, true);

  assert.equal(window.fooComponent.mouseMoveEvent[0].type, "mousemove");
  assert.equal(window.fooComponent.mouseMoveEvent[1], window.fooComponent.getEl("button"));
});

it("should invoke event handler method for non-bubbling events with extra args", function () {
  window.fooComponent.mouseMoveEvent = null;

  triggerMouseEvent(window.fooComponent.getEl("ok"), "mousemove");

  assert.equal(window.fooComponent.mouseMoveEvent != null, true);
  assert.equal(window.fooComponent.mouseMoveEvent[0].type, "ok");
  assert.equal(window.fooComponent.mouseMoveEvent[1].type, "mousemove");
  assert.equal(window.fooComponent.mouseMoveEvent[2], window.fooComponent.getEl("ok"));

  triggerMouseEvent(window.fooComponent.getEl("cancel"), "mousemove");

  assert.equal(window.fooComponent.mouseMoveEvent != null, true);
  assert.equal(window.fooComponent.mouseMoveEvent[0].type, "cancel");
  assert.equal(window.fooComponent.mouseMoveEvent[1].type, "mousemove");
  assert.equal(window.fooComponent.mouseMoveEvent[2], window.fooComponent.getEl("cancel"));
});

it("should invoke event handler method for bubbling events", function () {
  window.fooComponent.clickEvent = null;
  triggerMouseEvent(window.fooComponent.getEl("button"), "click");
  assert.equal(window.fooComponent.clickEvent != null, true);
  assert.equal(window.fooComponent.clickEvent[0].type, "click");
  assert.equal(window.fooComponent.clickEvent[1], window.fooComponent.getEl("button"));
});

it("should invoke event handler method for bubbling events with extra args", function () {
  var component = window.fooComponent;

  window.fooComponent.clickEvent = null;

  triggerClick(component.getEl("ok"));

  assert.equal(component.clickEvent[0].type, "ok");
  assert.equal(typeof component.clickEvent[1].stopPropagation, "function");
  assert.equal(component.clickEvent[2].innerHTML, "OK");

  triggerClick(component.getEl("cancel"));

  assert.equal(component.clickEvent[0].type, "cancel");
  assert.equal(typeof component.clickEvent[1].stopPropagation, "function");
  assert.equal(component.clickEvent[2].innerHTML, "Cancel");
});
