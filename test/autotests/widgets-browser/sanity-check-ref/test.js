var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), { });

    var fooWidget = widget.getWidget('foo');
    expect(fooWidget.el.className).to.equal('foo');

    var link = widget.getEl('link');
    expect(link.nodeName).to.equal('A');
};