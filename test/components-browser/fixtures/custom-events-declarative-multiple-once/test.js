var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});

    component.getComponent("bar").emitTestEvent1();
    component.getComponent("bar").emitTestEvent1();

    expect(component.testEvent1Fired).to.equal(1);

    component.getComponent("bar").emitTestEvent2();
    component.getComponent("bar").emitTestEvent2();

    expect(component.testEvent2Fired).to.equal(1);
};
