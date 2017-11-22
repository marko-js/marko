var expect = require('chai').expect;
var hooks = require('./hooks');

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), { name: 'Frank' });
    expect(hooks.getHookNames()).deep.equal(["root:create", "root:render", "foo:create", "foo:render", "foo:mount", "root:mount"]);

    hooks.reset();

    component.input = { name: 'John' };
    component.update();

    expect(hooks.getHookNames()).deep.equal(["root:render", "foo:render", "foo:update", "root:update"]);
};