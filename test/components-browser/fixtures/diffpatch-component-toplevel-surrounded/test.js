var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});

    component.incrementBar();

    var children = component.getEl('root').children;
    expect(children[children.length - 1].nodeName).to.equal('SPAN');
};