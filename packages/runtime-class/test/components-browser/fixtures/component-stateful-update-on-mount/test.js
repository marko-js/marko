var expect = require("chai").expect;

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"));
  // Queued behind the update Marko schedules with setImmediate in onMount.
  setImmediate(function () {
    expect(component.getEl("root").innerHTML).to.contain("Mounted: true");
    done();
  });
};
