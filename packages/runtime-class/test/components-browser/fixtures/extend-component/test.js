var assert = require("assert/strict");

module.exports = function (helpers) {
  helpers.mount(require.resolve("./components/app-checkbox"), {
    checked: true,
    class: "my-checkbox",
    data: 123,
  });

  assert.equal(helpers.targetEl.children.length, 1);
  assert.equal(helpers.targetEl.children[0].nodeName, "BUTTON");

  var el = helpers.targetEl.querySelector(".my-checkbox");
  assert.equal(el != null, true);
};
