var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        size: 'large',
        label: 'Initial Label'
    });

    expect(component.el.className).to.contain('large');

    component.destroy();

    expect(component.update() === undefined).to.equal(true);
};