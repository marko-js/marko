var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});

    expect(component.sayHello('Frank')).to.equal('Hello Frank!');
};