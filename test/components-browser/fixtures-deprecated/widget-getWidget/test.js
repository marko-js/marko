var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {});
    expect(widget.getWidget('bar').name).to.equal('app-foo');
};