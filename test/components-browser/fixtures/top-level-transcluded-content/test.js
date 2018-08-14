var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index.marko"));
    var inner = component.getComponent("inner");
    expect(helpers.targetEl.textContent).to.equal("Hello world");
    inner.forceUpdate(); // Toggle
    inner.update();
    expect(helpers.targetEl.textContent).to.equal("Hello world");
    inner.forceUpdate(); // Toggle
    inner.update();
    expect(helpers.targetEl.textContent).to.equal("Hello world");
    component.forceUpdate(); // Break
    component.update();
    expect(helpers.targetEl.textContent).to.equal("Hello world");
};

module.exports.fails = "issue #1033";
