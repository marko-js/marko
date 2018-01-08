var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    expect(helpers.targetEl.querySelector('.root') != null).to.equal(true);

    expect(component.detachEvent).to.equal(undefined);
    component.destroy();

    expect(helpers.targetEl.querySelector('.root') != null).to.equal(true);
    expect(component.detachEvent != null).to.equal(true);

    component.detachEvent.detach();
    expect(helpers.targetEl.querySelector('.root') == null).to.equal(true);
};