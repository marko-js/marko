var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var rootEl = component.el;

  var nestedDivs = rootEl.querySelectorAll("div");
  assert.equal(nestedDivs[0].className, "hello");
  assert.equal(nestedDivs[1].className, "world");
  assert.equal(nestedDivs[0].innerHTML, "0");
  assert.equal(nestedDivs[1].innerHTML, "0");

  component.state.swapped = true;
  component.state.count = 1;
  component.update();

  var nestedDivsAfter = rootEl.querySelectorAll("div");
  assert.equal(nestedDivsAfter[0].className, "world");
  assert.equal(nestedDivsAfter[1].className, "hello");
  assert.equal(nestedDivsAfter[0].innerHTML, "1");
  assert.equal(nestedDivsAfter[1].innerHTML, "1");
  assert.notEqual(nestedDivsAfter[0], nestedDivs[1]);
  assert.notEqual(nestedDivsAfter[1], nestedDivs[0]);
};
