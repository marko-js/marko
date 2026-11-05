var assert = require("assert/strict");

module.exports = function (helpers) {
  var targetEl = helpers.targetEl;

  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    messageCount: 10,
  });

  assert.match(targetEl.innerHTML, /Hello Frank! You have 10 new messages\./);

  component.input = {
    name: "John",
    messageCount: 20,
  };

  component.update();

  assert.match(targetEl.innerHTML, /Hello John! You have 20 new messages\./);

  component.input = {
    name: "Jane",
    messageCount: 30,
  };

  assert.match(targetEl.innerHTML, /Hello John! You have 20 new messages\./);

  component.update();

  assert.match(targetEl.innerHTML, /Hello Jane! You have 30 new messages\./);
};
