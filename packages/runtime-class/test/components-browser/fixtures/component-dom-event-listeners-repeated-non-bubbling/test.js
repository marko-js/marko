var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    count: 30,
  });

  var li1 = component.getEl("foo-0");
  var li2 = component.getEl("foo-1");
  var li3 = component.getEl("foo-2");

  assert.equal(li1.innerHTML, "red");
  assert.equal(li2.innerHTML, "green");
  assert.equal(li3.innerHTML, "blue");

  helpers.triggerMouseMove(li1);

  assert.equal(li1.innerHTML, "0");
  assert.equal(li2.innerHTML, "green");
  assert.equal(li3.innerHTML, "blue");

  helpers.triggerMouseMove(li2);

  assert.equal(li1.innerHTML, "0");
  assert.equal(li2.innerHTML, "1");
  assert.equal(li3.innerHTML, "blue");

  helpers.triggerMouseMove(li3);

  assert.equal(li1.innerHTML, "0");
  assert.equal(li2.innerHTML, "1");
};
