module.exports = {
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
};