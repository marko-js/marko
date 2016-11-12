var iframeContentComponent = require('./components/app-iframe-content');

module.exports = require('marko/widgets').defineComponent({
	template: require.resolve('./template.marko'),

	renderIntoIframe: function() {
		var frameEl = this.getFrameEl();
		return iframeContentComponent.render({})
            .appendTo(frameEl.contentWindow.document.body)
            .getWidget();
	},

	getFrameEl: function() {
		return this.getEl('frame');
	}
});