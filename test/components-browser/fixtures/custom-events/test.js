var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var testEventFired = false;

    component.getComponent('bar').on('testEvent', function (a, b) {
        expect(a).to.equal('a');
        expect(b).to.equal('b');
        testEventFired = true;
    });

    component.getComponent('bar').emitTestEvent();

    expect(testEventFired).to.equal(true);
};