var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var button1Component = component.getButton1();
    expect(button1Component != null).to.equal(true);

    component.destroyButton1();

    button1Component = component.getButton1();
    expect(button1Component === undefined).to.equal(true);
    expect(component.getComponent('simple') == null).to.equal(true);
};