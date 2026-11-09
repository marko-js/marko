var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    count: 30,
  });

  var targetEl = component.el;

  setTimeout(function () {
    component.setState("count", 100);
    component.update();
    assert.equal(component.state.count, 100);
    assert.match(targetEl.innerHTML, /Hello Frank! You have 100 new messages\./);
  }, 100);

  setTimeout(function () {
    component.setState("count", 200);
    component.update();
    assert.equal(component.state.count, 200);
    assert.match(targetEl.innerHTML, /Hello Frank! You have 200 new messages\./);
    done();
  }, 200);

  setTimeout(function () {
    component.setState("count", 1);
    component.update();
    assert.equal(component.state.count, 1);
    assert.match(targetEl.innerHTML, /Hello Frank! You have 1 new messages\./);
  }, 1);
};
