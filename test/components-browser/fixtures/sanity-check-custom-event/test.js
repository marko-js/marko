var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index.marko'), { name: 'Frank' });

    expect(component.fooEvent.length).to.equal(3);
    expect(component.fooEvent[0]).to.equal('abc');
    expect(component.fooEvent[1]).to.equal('123');
    expect(component.fooEvent[2]).to.equal(component.fooComponent);
};