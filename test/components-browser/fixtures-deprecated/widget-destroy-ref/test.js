var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var button1Widget = widget.getButton1();
    expect(button1Widget != null).to.equal(true);

    widget.destroyButton1();

    button1Widget = widget.getButton1();
    expect(button1Widget === undefined).to.equal(true);
    expect(widget.getWidget('simple') == null).to.equal(true);
};