var expect = require('chai').expect;

module.exports = function (helpers) {
    function renderWidget(rootTagName) {
        var widget = helpers.mount(require('./index'), {
            rootTagName: rootTagName
        });
        return widget;
    }

    var widgetDiv = renderWidget('div');
    var widgetSpan = renderWidget('span');

    expect(widgetDiv.el.nodeName).to.equal('DIV');
    expect(widgetSpan.el.nodeName).to.equal('SPAN');
};