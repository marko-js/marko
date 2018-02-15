module.exports = {
	onMount: function () {
		this.numOfInvocations = [];
	},

	handleButtonClick: function () {
		this.buttonClickCalls.push(arguments);
	}
};
