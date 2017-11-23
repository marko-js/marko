var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index.marko'));

    expect(component.el.querySelector('pre').innerHTML).to.equal('');

    component.submit();
    component.update();

    expect(component.el.querySelector('pre').innerHTML).to.equal('Placeholder error');
};