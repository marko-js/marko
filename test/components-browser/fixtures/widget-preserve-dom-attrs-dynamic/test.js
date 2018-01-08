var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        className: 'foo'
    });

    var span = component.el.querySelector('span');
    expect(span.className).to.equal('foo');

    component.setState('className', 'bar');
    component.update();

    expect(span.className).to.equal('foo');
};