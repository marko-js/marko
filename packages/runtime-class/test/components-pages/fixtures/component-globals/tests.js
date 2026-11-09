var assert = require("assert/strict");

it("should allow attributes to not be updated", function () {
  var app = window.app;
  var helloComponent = app.getComponent("hello");

  assert.equal(helloComponent.el.querySelector(".name").innerHTML, "Frank");
  assert.equal(helloComponent.el.querySelector(".count").innerHTML, "1");

  helloComponent.state.count++;
  helloComponent.update();

  assert.equal(helloComponent.el.querySelector(".name").innerHTML, "Frank");
  assert.equal(helloComponent.el.querySelector(".count").innerHTML, "2");

  app.forceUpdate();
  app.update();

  helloComponent = app.getComponent("hello");
  assert.equal(helloComponent.el.querySelector(".name").innerHTML, "Frank");
  assert.equal(helloComponent.el.querySelector(".count").innerHTML, "2");
});
