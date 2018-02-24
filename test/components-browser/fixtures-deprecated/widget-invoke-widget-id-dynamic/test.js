var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {});

    var barWidget = widget.getWidget('myBar');
    expect(barWidget != null).to.equal(true);
    expect(barWidget.name).to.equal('app-bar');
};