var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.getComponent('bar') == null).to.equal(false);

    component.getComponent('bar').destroy();

    expect(component.getComponent('bar') == null).to.equal(true);
};