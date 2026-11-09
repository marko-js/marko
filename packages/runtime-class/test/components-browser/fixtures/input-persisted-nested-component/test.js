var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    color: "red",
  });

  assert.equal(component.el.getAttribute("style"), "color:red");
  assert.equal(component.getComponent("counter").el.getAttribute("style"), "color:red");
  assert.equal(component.getComponent("counter").el.querySelector(".count").innerHTML, "0");

  component.getComponent("counter").increment();
  component.getComponent("counter").update();

  assert.equal(component.el.getAttribute("style"), "color:red");
  assert.equal(component.getComponent("counter").el.getAttribute("style"), "color:red");
  assert.equal(component.getComponent("counter").el.querySelector(".count").innerHTML, "1");

  component.updateColor("green");
  component.update();

  assert.equal(component.el.getAttribute("style"), "color: green;");
  assert.equal(component.getComponent("counter").el.getAttribute("style"), "color: green;");
  assert.equal(component.getComponent("counter").el.querySelector(".count").innerHTML, "1");

  //
  // assert.equal(component.el.style.color, '#09c;');
  // assert.equal(component.getComponent('counter').el.style.color, '#09c;');
  //
  // assert.equal(component.getEl('current').getAttribute('style'), 'color:#09c;');
};
