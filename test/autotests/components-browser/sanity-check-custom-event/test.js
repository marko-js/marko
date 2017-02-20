var expect = require('chai').expect;

module.exports = function(helpers) {

    var widget = helpers.mount(require('./index.marko'), { name: 'Frank' });

    expect(widget.fooEvent.length).to.equal(3);
    expect(widget.fooEvent[0]).to.equal('abc');
    expect(widget.fooEvent[1]).to.equal('123');
    expect(widget.fooEvent[2]).to.equal(widget.fooWidget);
};