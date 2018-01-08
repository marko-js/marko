var expect = require('chai').expect;

module.exports = function (helpers) {
    var componentModule = require('./index');
    var component = helpers.mount(componentModule);
    expect(component.state.clicked).to.equal(false);

    helpers.triggerClick(component.el);

    expect(component.state.clicked).to.equal(true);
};