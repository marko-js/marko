var expect = require("chai").expect;

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"), {});
  var counter = component.getComponent("counter");
  var button = counter.getEl("button");

  expect(component.state.count).to.equal(0);
  expect(counter.state.count).to.equal(0);
  button.click();

  setTimeout(() => {
    expect(component.state.count).to.equal(1);
    expect(counter.state.count).to.equal(1);
    done();
  }, 100);
};
