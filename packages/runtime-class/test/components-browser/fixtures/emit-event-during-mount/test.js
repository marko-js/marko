var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));
  assert.deepEqual(component.receivedData, { hello: "world" });
};
