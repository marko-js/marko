var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.$__document != null).to.equal(true);
    expect(widget.$__document).to.equal(document);

    var contentWidget = widget.renderIntoIframe();
    expect(contentWidget.$__document).to.equal(widget.getFrameEl().contentWindow.document);
    expect(contentWidget.getEl('input').value).to.equal('test');

    expect(contentWidget.getWidget('more').getValue()).to.equal('hello');
};