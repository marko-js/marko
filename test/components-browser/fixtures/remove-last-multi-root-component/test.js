var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});
    var el = component.getEl('root');

    expect(el.children.length).to.equal(2);
    component.toggle();
    component.forceUpdate();
    component.update();
    expect(el.children.length).to.equal(0);
    component.toggle();
    component.forceUpdate();
    component.update();
    expect(el.children.length).to.equal(2);
};
