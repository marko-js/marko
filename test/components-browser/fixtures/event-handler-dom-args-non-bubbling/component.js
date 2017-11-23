module.exports = {
	onMount: function () {
		this.mouseMoveEvent = undefined;
	},

	handleButtonMouseMove: function () {
		this.mouseMoveEvent = arguments;
	}
};