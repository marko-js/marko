var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ 
        component: require.resolve('./index'),
        widget: require.resolve('./widget')
    }, {
        label: 'Foo'
    });

    var oldId = widget.id;

    widget.rerender({
        label: 'Bar'
    });

    expect(widget.id).to.equal(oldId);
};

// a split widget cannot re-render when hydrated
module.exports.skipHydrate = true;