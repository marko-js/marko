var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {
        name: 'Frank'
    });

    expect(widget.config).to.deep.equal({
        string: 'Frank',
        number: 12,
        boolean: true,
        complex: {
            a: '<\"hello">',
            b: 'test'
        }
    });
};