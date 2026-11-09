var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var els = component.getEls("colorListItems");
  assert.equal(els.length, 3);
  assert.equal(els[0].innerHTML, "red");
  assert.equal(els[1].innerHTML, "green");
  assert.equal(els[2].innerHTML, "blue");
};
