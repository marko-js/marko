var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {
        label: 'Foo'
    });

    var rootEl = component.getEl('root');

    component.input = {
        label: 'Bar'
    };
    component.update();

    expect(component.getEl('root')).to.equal(rootEl);
};