var assert = require("assert/strict");

it("should allow attributes to not be updated", function () {
  function testHelloComponent(helloComponent) {
    assert.equal(helloComponent.el.querySelector(".name").innerHTML, "Frank");
    assert.equal(helloComponent.el.querySelector(".count").innerHTML, "1");

    helloComponent.state.count++;
    helloComponent.update();

    assert.equal(helloComponent.el.querySelector(".name").innerHTML, "Frank");
    assert.equal(helloComponent.el.querySelector(".count").innerHTML, "2");
  }

  testHelloComponent(window.hello1);
  testHelloComponent(window.hello2);
  testHelloComponent(window.hello3);
});
