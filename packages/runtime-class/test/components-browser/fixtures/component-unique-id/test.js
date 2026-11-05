var assert = require("assert/strict");

module.exports = function (helpers) {
  var components = [];

  function renderComponent() {
    var component = helpers.mount(require.resolve("./index"), {});
    components.push(component);
  }

  renderComponent();
  renderComponent();
  renderComponent();

  var ids = {};
  components.forEach(function (component) {
    ids[component.id] = true;
  });

  assert.equal(components.length, 3);
  assert.equal(Object.keys(ids).length, components.length);
};
