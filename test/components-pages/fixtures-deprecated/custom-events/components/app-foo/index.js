module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function() {
		return {
		};
	},

	init: function() {
		window.fooWidget = this;
		this.pressEvent = undefined;
	},

	handleButtonPress: function() {
		this.pressEvent = arguments;
	}
});