var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"));
  // Queued behind the update Marko schedules with setImmediate in onMount.
  setImmediate(function () {
    assert.match(component.getEl("root").innerHTML, /Mounted: true/);
    done();
  });
};
