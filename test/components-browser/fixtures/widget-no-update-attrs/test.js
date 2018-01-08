var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'));

    var span = component.el.querySelector('span');
    expect(span.className).to.equal('test');

    component.update();

    expect(span.className).to.equal('test');
};