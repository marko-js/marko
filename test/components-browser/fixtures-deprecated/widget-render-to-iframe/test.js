var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    // expect(widget.___document).to.exist;
    // expect(widget.___document).to.equal(document);

    var contentWidget = widget.renderIntoIframe();
    // expect(contentWidget.___document).to.equal(widget.getFrameEl().contentWindow.document);
    expect(contentWidget.getEl('input').value).to.equal('test');

    expect(contentWidget.getWidget('more').getValue()).to.equal('hello');
};