var expect = require('chai').expect;
var hooks = require('./hooks');

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank' });

    component.destroy();

    expect(hooks.getHookNames()).deep.equal(['root:destroy', 'foo:destroy']);
};