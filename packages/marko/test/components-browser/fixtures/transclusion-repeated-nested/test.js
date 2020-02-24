var expect = require("chai").expect;

module.exports = function(helpers) {
    var root = helpers.mount(require.resolve("./index"));
    var counters = root.getComponents("counter");
    var containers = root.getComponents("container");

    expect(helpers.targetEl.textContent).to.equal("000");

    counters[0].increment();
    counters[0].update();
    counters[1].increment();
    counters[1].increment();
    counters[1].update();
    counters[2].increment();
    counters[2].increment();
    counters[2].increment();
    counters[2].update();

    expect(helpers.targetEl.textContent).to.equal("123");

    containers[1].forceUpdate();
    containers[1].update();
    containers[2].forceUpdate();
    containers[2].update();

    expect(helpers.targetEl.textContent).to.equal("123");

    counters[2].increment();
    counters[2].update();

    expect(helpers.targetEl.textContent).to.equal("124");
};
