var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {
        label: 'Foo'
    });

    var oldId = component.id;

    component.rerender({
        label: 'Bar'
    });

    expect(component.el.id).to.equal(oldId);
};