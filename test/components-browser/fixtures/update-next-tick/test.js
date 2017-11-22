var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var component = helpers.mount(require('./index.marko'), {
        size: 'large',
        label: 'Initial Label'
    });

    component.onUpdate = function () {
        expect(component.el.className).to.contain('small');
        done();
    };

    expect(component.el.className).to.contain('large');
    component.setSize('small');
    expect(component.el.className).to.not.contain('small');
};