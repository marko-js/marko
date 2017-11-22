var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    expect(component.getEl('foo').className).to.equal('foo');
    expect(component.getEl('bar').className).to.equal('bar');
    expect(component.getEl('foo-bar').className).to.equal('foo-bar');
};