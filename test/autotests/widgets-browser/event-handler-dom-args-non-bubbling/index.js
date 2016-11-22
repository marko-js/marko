module.exports = require('marko/widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
		};
	},

	init: function() {
		this.mouseMoveEvent = undefined;
	},

	handleButtonMouseMove: function() {
		this.mouseMoveEvent = arguments;
	}
});