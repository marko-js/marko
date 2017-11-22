var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    expect(component.getComponents('bar').length).to.equal(2);
    expect(component.getComponents('bar')[0].name).to.equal('a');
    expect(component.getComponents('bar')[1].name).to.equal('b');
};