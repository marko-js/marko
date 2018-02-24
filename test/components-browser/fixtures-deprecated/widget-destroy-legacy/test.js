var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ 
        component: require.resolve('./index'),
        widget: require.resolve('./widget')
    }, {});

    expect(widget.getWidget('bar') == null).to.equal(false);

    widget.getWidget('bar').destroy();

    expect(widget.getWidget('bar') == null).to.equal(true);
};