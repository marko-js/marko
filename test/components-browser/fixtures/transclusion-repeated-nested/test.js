var expect = require("chai").expect;

module.exports = function(helpers) {
    var root = helpers.mount(require.resolve("./index"));
    var counters = root.getComponents("counter");

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
};
