var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank' });

    var out1 = component.renderArg;

    component.input = { name: 'John' };
    component.update();

    var out2 = component.renderArg;

    expect(out1).to.not.equal(out2);
    expect(out1.element).to.be.a('function');
    expect(out2.element).to.be.a('function');
};