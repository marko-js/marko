var assert = require("assert/strict");

module.exports = function (helpers) {
  var items = ["a", "b", "c"];
  var count = 0;

  var component = helpers.mount(require.resolve("./index"), {
    items: items,
    count: count,
  });

  assert.equal(helpers.targetEl.firstElementChild.getAttribute("data-count"), "0");

  Array.from(helpers.targetEl.firstElementChild.childNodes).forEach((child) => {
    if (child.tagName === "div") {
      assert.equal(child.getAttribute("data-count"), "0");
    }
  });

  assert.equal(helpers.targetEl.textContent, "abc");

  component.input = {
    count: count + 1,
    items: [].concat(items).reverse(),
  };
  component.update();

  assert.equal(helpers.targetEl.firstElementChild.getAttribute("data-count"), "1");

  Array.from(helpers.targetEl.firstElementChild.childNodes).forEach((child) => {
    if (child.tagName === "div") {
      assert.equal(child.getAttribute("data-count"), "0");
    }
  });

  assert.equal(helpers.targetEl.textContent, "cba");
};
