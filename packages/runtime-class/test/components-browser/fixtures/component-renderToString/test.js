var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "john",
  });

  assert.equal(component.renderedHtml, '<div class="hello"><div>john</div></div>');
};
