var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  assert.equal(component.events.length, 0);

  var finishDetach;

  component.handleDetach = function (color, event) {
    assert.equal(color, "green");
    finishDetach = event.detach;
    event.preventDefault();
  };

  component.input = {
    colors: ["red", "blue"],
  };

  component.update();

  assert.equal(component.el.querySelectorAll("li").length, 3);
  assert.match(component.el.querySelectorAll("li")[1].innerHTML, /green/);

  finishDetach();

  assert.equal(component.el.querySelectorAll("li").length, 2);
  assert.match(component.el.querySelectorAll("li")[1].innerHTML, /blue/);
};
