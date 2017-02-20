var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        className: 'foo'
    });

    var span = widget.el.querySelector('span');
    expect(span.className).to.equal('foo');

    widget.setState('className', 'bar');
    widget.update();

    expect(span.className).to.equal('foo');
};