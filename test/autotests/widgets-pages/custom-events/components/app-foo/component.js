module.exports = {
	onMount: function() {
		window.fooWidget = this;
		this.pressEvent = undefined;
	},

	handleButtonPress: function() {
		this.pressEvent = arguments;
	}
};