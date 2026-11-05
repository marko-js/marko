var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });

  assert.match(component.el.innerHTML, /Hello Frank!/);

  component.setName("Jane");

  assert.match(component.el.innerHTML, /Hello Frank!/);

  component.onUpdate = function () {
    assert.match(component.el.innerHTML, /Hello Jane!/);
    done();
  };
};
