var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {
        label: 'Foo'
    });

    var oldId = component.id;

    component.input = {
        label: 'Bar'
    };
    component.update();

    expect(component.el.id).to.equal(oldId);
};