var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var root = component.getEl("root");
  assert.equal(root.innerHTML, "<span>a</span><span>b</span><span>c</span>");

  var cEl = root.firstElementChild.nextElementSibling.nextElementSibling;
  component.state.count++;
  component.update();

  assert.equal(root.innerHTML, "<span>c</span>");
  assert.equal(cEl, root.firstElementChild);
};
