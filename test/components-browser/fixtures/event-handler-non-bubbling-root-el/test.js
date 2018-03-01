var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});

    expect(component.mouseMoveEvent).to.equal(undefined);

    var rootEl = helpers.targetEl.querySelector('div');

    helpers.triggerMouseMove(rootEl);

    expect(component.mouseMoveEvent).to.equal(true);
};