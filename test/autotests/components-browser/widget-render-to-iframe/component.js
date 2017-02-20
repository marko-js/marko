var iframeContentComponent = require('./components/app-iframe-content');

module.exports = {
	renderIntoIframe: function() {
		var frameEl = this.getFrameEl();
		return iframeContentComponent.renderSync({})
            .appendTo(frameEl.contentWindow.document.body)
            .getComponent();
	},

	getFrameEl: function() {
		return this.getEl('frame');
	}
};