var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });

    expect(helpers.targetEl.querySelector('footer') != null).to.equal(true);
    expect(helpers.targetEl.querySelector('div') != null).to.equal(true);

    component.state.showFooter = false;
    component.update();

    expect(helpers.targetEl.querySelector('footer') == null).to.equal(true);
    expect(helpers.targetEl.querySelector('div') != null).to.equal(true);
};
