var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  assert.match(component.el.innerHTML, /red/);
  assert.match(component.el.innerHTML, /green/);
  assert.match(component.el.innerHTML, /blue/);

  component.addColor("orange");
  component.update();

  assert.match(component.el.innerHTML, /red/);
  assert.match(component.el.innerHTML, /green/);
  assert.match(component.el.innerHTML, /blue/);
  assert.match(component.el.innerHTML, /orange/);
};
