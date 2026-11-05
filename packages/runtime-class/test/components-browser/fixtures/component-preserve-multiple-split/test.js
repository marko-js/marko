var assert = require("assert/strict");

module.exports = function (helpers) {
  helpers.mount(require.resolve("./index"), {});
  assert.equal(window.mountCount, 3);
};
