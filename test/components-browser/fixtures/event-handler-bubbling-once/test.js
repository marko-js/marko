var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var numOfInvocations = 0;

    helpers.triggerClick(component.getEl('foo'));
    expect(component.numOfInvocations).to.equal(1);

    helpers.triggerClick(component.getEl('foo'));
    expect(component.numOfInvocations).to.equal(1);
};
