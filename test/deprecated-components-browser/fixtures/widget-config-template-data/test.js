var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.config).to.deep.equal({
        string: 'world',
        number: 12,
        boolean: true,
        complex: {
            a: '<\"hello">',
            b: 'test'
        }
    });
};