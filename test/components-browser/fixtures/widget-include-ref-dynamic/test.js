var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var barComponent = component.getComponent('myBar');
    expect(barComponent != null).to.equal(true);
    expect(barComponent.name).to.equal('app-bar');
};