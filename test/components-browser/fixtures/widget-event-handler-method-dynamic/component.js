module.exports = {
	onMount: function () {
		this.fooClicked = false;
		this.barClicked = false;
	},

	handleFooClick: function () {
		this.fooClicked = true;
	},

	handleBarClick: function () {
		this.barClicked = true;
	}
};