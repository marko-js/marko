var IframeContentComponent = require('../app-iframe-content');

module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	renderIntoIframe: function() {
		var frameEl = this.getFrameEl();
		return IframeContentComponent.render({}).appendTo(
			frameEl.contentWindow.document.body).getWidget();
	},

	getFrameEl: function() {
		return this.getEl('frame');
	}
});