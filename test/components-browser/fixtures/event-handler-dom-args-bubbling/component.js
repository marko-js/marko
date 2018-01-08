module.exports = {
	onMount: function () {
		this.buttonClickCalls = [];
	},

	handleButtonClick: function () {
		this.buttonClickCalls.push(arguments);
	}
};