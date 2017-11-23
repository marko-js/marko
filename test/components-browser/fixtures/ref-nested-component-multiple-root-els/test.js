var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank', age: 30 });
    var fooComponent = component.getComponent('foo');
    expect(fooComponent != null).to.equal(true);
    expect(fooComponent.getName()).to.equal('Frank');
    expect(fooComponent.getAge()).to.equal('30');
};