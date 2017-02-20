var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { name: 'Frank' });

    var out1 = widget.renderArg;

    widget.input = { name: 'John' };
    widget.update();

    var out2 = widget.renderArg;

    expect(out1).to.not.equal(out2);
    expect(out1.element).to.be.a('function');
    expect(out2.element).to.be.a('function');
};
