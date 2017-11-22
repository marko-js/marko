var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(component.clicked).to.equal(false);
    helpers.triggerMouseEvent(component.getEl('button'), 'click');
    expect(component.clicked).to.equal(true);
};