var expect = require('chai').expect;
var iframeContentComponent = require('./components/app-iframe-content');

module.exports = {
    renderIntoIframe: function () {
        var frameEl = this.getEl('frame');
        return iframeContentComponent.renderSync({}).appendTo(frameEl.contentWindow.document.body).getComponent();
    },

    test: function (helpers) {
        var contentComponent = this.renderIntoIframe();
        expect(contentComponent.el.ownerDocument).to.equal(this.getEl('frame').contentWindow.document);
        expect(contentComponent.getEl('input').value).to.equal('test');
        expect(contentComponent.getComponent('more').getValue()).to.equal('hello');

        var buttonClick = false;

        contentComponent.on('buttonClick', function () {
            buttonClick = true;
        });

        helpers.triggerMouseEvent(contentComponent.getEl('button'), 'click');

        expect(buttonClick).to.equal(true);
    }
};