var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), { });
    var rootEl = component.el;
    var helloCountEl = rootEl.querySelector('span.hello-count');
    var helloComponent = component.getComponent('hello');

    component.state.count = 1;
    component.update();

    expect(component.el).to.equal(rootEl);
    expect(rootEl.querySelector('span.hello-count').innerHTML).to.equal('1');
    expect(rootEl.querySelector('span.hello-count')).to.equal(helloCountEl);

    component.state.renderHello = false;
    component.update();

    expect(helloComponent.isDestroyed()).to.equal(true);
    expect(helloComponent.el == null).to.equal(true);
};
