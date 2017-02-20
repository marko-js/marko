var expect = require('chai').expect;
var hooks = require('./hooks');

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { name: 'Frank' });

    widget.destroy();

    expect(hooks.getHookNames()).deep.equal(['root:destroy', 'foo:destroy']);
};
