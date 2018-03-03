var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});

    var children;

    children = component.getEl('root').children;
    expect(children.length).to.equal(3);

    component.state.count++;
    component.update();

    children = component.getEl('root').children;
    expect(children.length).to.equal(2);
};