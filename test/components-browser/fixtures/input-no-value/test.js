var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'));

    expect(component.getEl('searchInput').value).to.equal('');

    component.increment();
    component.update();

    expect(component.getEl('searchInput').value).to.equal('');
};