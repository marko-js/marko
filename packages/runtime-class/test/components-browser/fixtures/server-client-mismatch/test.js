var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(helpers.targetEl.innerHTML, '<div class="foo"></div><a href="ebay.com">eBay</a>');

  component.forceUpdate();
  component.update();

  assert.equal(helpers.targetEl.innerHTML, '<div class="foo"></div><a href="ebay.com">eBay</a>');
};
