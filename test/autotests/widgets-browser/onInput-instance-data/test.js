var expect = require('chai').expect;

require('./widget');

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.string).to.equal('world');
    expect(widget.number).to.equal(12);
    expect(widget.boolean).to.equal(true);
    expect(widget.complex).to.deep.equal({
        a: '<\"hello">',
        b: 'test'
    });
};