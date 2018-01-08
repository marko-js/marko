module.exports = {

	onMount: function () {
		this.pressEvent = undefined;
	},

	handleButtonPress: function () {
		this.pressEvent = arguments;
	}
};