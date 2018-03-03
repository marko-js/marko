var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), {});
    // var rootEl = component.el;
    var helloComponent = component.getComponent('hello');
    expect(component.getEl('root').querySelector('.hello') != null).to.equal(true);
    // expect(helloComponent.el.parentNode).to.equal(rootEl);

    component.state.insertEl = true;
    component.state.count++;
    component.update();

    expect(component.getEl('root').querySelector('.hello') != null).to.equal(true);

    expect(component.getComponent('hello')).to.equal(helloComponent);
};