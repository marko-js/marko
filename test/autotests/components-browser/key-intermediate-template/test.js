var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });
    var foo = component.getComponent('foo');
    expect(foo.realFoo).to.equal(true);
};
