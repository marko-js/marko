var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var el = component.el;

    expect(component.el.parentNode).to.equal(helpers.targetEl);
    component.destroy();
    expect(component.el == null).to.equal(true);
    expect(el.parentNode == null).to.equal(true);
};