var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    size: "large",
    label: "Initial Label",
  });

  component.onUpdate = function () {
    assert.match(component.el.className, /small/);
    done();
  };

  assert.match(component.el.className, /large/);
  component.setSize("small");
  assert.doesNotMatch(component.el.className, /small/);
};
