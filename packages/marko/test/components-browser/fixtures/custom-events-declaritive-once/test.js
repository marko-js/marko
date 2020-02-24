var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    var numTestEventFired = 0;

    component.handleTestEvent1 = function(a, b) {
        expect(a).to.equal("a");
        expect(b).to.equal("b");
        numTestEventFired++;
    };

    component.getComponent("bar").emitTestEvent();
    component.getComponent("bar").emitTestEvent();

    expect(numTestEventFired).to.equal(1);
};
