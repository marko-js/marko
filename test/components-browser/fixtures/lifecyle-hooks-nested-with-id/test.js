var expect = require('chai').expect;
var hooks = require('./hooks');

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank' });

    expect(component.el.querySelector('.foo .name').innerHTML).to.equal('Frank');
    expect(hooks.getHookNames('foo')).to.deep.equal(['create', 'render', 'mount']);
    expect(hooks.getHookNames('root')).to.deep.equal(['create', 'render', 'mount']);

    hooks.reset();

    component.input = { name: 'John' };
    component.update();

    expect(component.el.querySelector('.foo .name').innerHTML).to.equal('John');
    expect(hooks.getHookNames('foo')).to.deep.equal(['render', 'update']);
    expect(hooks.getHookNames('root')).to.deep.equal(['render', 'update']);
};