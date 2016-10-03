module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
		};
	},

	init: function() {
		this.clicked = false;
	},

	handleButtonClick: function() {
		this.clicked = true;
	}
});