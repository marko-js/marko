var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var barWidget = widget.getWidget('barTest');
    expect(barWidget != null).to.equal(true);
    expect(barWidget.name).to.equal('app-bar');
};