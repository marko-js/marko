var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    expect(component.getComponents('bar').length).to.equal(1);
    expect(component.getComponents('bar')[0].name).to.equal('app-foo');
};