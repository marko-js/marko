var expect = require('chai').expect;

require('./component');

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.string).to.equal('world');
    expect(component.number).to.equal(12);
    expect(component.boolean).to.equal(true);
    expect(component.complex).to.deep.equal({
        a: '<\"hello">',
        b: 'test'
    });
};