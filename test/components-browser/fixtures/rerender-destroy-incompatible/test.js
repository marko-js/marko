var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index.marko'), {});

    expect(component.el.innerHTML).to.contain('foo');
    expect(component.el.innerHTML).to.not.contain('bar');

    var foo = component.getComponent('child');
    expect(foo.isDestroyed()).to.equal(false);

    component.state.target = 'bar';
    component.update();

    expect(foo.isDestroyed()).to.equal(true);

    var bar = component.getComponent('child');
    expect(bar.isDestroyed()).to.equal(false);

    expect(component.el.innerHTML).to.not.contain('foo');
    expect(component.el.innerHTML).to.contain('bar');
};