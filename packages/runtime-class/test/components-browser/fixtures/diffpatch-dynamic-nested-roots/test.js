var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), { show: true });
  var rootEl = component.getEl("root");

  assert.match(rootEl.innerHTML, /<span>hello<\/span>/);

  component.input = {};
  component.update();

  assert.doesNotMatch(rootEl.innerHTML, /<span>hello<\/span>/);

  component.input = { show: true };
  component.update();

  assert.match(rootEl.innerHTML, /<span>hello<\/span>/);
};
