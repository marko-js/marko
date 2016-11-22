module.exports = require('marko/widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
		};
	},

	init: function() {
		this.buttonClickCalls = [];
	},

	handleButtonClick: function() {
		this.buttonClickCalls.push(arguments);
	}
});