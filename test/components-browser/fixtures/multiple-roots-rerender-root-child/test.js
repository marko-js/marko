var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index.marko'), {});

    var foo = component.getComponent('foo');
    expect(foo.el.innerHTML).to.contain('count:0');

    foo.state.count++;
    foo.update();

    expect(component.isDestroyed()).to.equal(false);
    expect(foo.isDestroyed()).to.equal(false);
    expect(foo.el.innerHTML).to.contain('count:1');
};