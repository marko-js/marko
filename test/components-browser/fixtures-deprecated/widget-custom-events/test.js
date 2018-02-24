var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ 
        component: require.resolve('./index'),
        widget: require.resolve('./widget')
    }, {});

    var testEventFired = false;

    widget.getWidget('bar').on('testEvent', function (a, b) {
        expect(a).to.equal('a');
        expect(b).to.equal('b');
        testEventFired = true;
    });

    widget.getWidget('bar').emitTestEvent();

    expect(testEventFired).to.equal(true);
};