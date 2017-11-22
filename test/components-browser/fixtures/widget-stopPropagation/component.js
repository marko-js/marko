module.exports = {
	onMount: function () {
		this.divClicked = false;
		this.buttonClicked = false;
	},

	handleDivClick: function (event) {
		this.divClicked = true;
	},

	handleButtonClick: function (event) {
		this.buttonClicked = true;
		event.stopPropagation();
	}
};