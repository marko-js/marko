var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./'), {});

    var oldState = component.state.toJSON();
    component.setState('foo', 'bar');

    expect(component.state.toJSON()).to.not.equal(oldState);

    oldState = component.state.toJSON();
    component.setState('hello', 'world');
    expect(component.state.toJSON()).to.equal(oldState);
};