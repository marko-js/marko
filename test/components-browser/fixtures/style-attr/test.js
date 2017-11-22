var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    expect(component.el.style.left).to.equal('0px');
    expect(component.el.style.marginRight).to.equal('10px');
};