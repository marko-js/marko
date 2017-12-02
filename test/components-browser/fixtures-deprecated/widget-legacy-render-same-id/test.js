var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        label: 'Foo'
    });

    var oldId = widget.id;

    widget.rerender({
        label: 'Bar'
    });

    expect(widget.id).to.equal(oldId);
};