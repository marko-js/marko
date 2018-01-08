var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    component.getComponent('bar').emitTestEvent1();

    expect(component.testEvent1Fired).to.equal(true);

    component.getComponent('bar').emitTestEvent2();

    expect(component.testEvent2Fired).to.equal(true);
};