var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var helloEl = component.getEl("hello");
  assert.equal(helloEl.innerHTML, "Hello Joe!");

  component.el.style.border = "1px solid red";
  component.el.className = "foo";

  component.el.querySelector("a").href = "http://www.foo.com/";

  component.getEl("hello2").removeAttribute("class");

  component.setState("name", "Frank");
  component.update();

  assert.equal(helloEl.innerHTML, "Hello Frank!");
  assert.equal(component.getEl("hello2").getAttribute("class"), null);

  // Make sure the preserved attributes did not change
  assert.equal(component.el.style.border, "1px solid red");
  assert.equal(component.el.className, "foo");
  assert.equal(component.el.querySelector("a").href, "http://www.foo.com/");
};
