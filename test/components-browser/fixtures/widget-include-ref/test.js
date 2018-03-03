var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});

    var barComponent = component.getComponent('barTest');
    expect(barComponent != null).to.equal(true);
    expect(barComponent.name).to.equal('app-bar');
};