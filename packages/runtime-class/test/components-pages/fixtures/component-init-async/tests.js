var assert = require("assert/strict");

it("should allow attributes to not be updated", function () {
  function testHelloComponent(name) {
    var helloComponent = window[name];
    assert.equal(helloComponent !== undefined, true);
    assert.ok(helloComponent.el.innerHTML.includes("Hello from " + name + "!"));
  }

  testHelloComponent("hello1");
  testHelloComponent("hello2");
  testHelloComponent("hello3");
});
