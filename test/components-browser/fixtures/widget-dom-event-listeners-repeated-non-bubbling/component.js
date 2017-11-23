module.exports = {
	onMount: function () {
		this.counter = 0;
	},

	handleMouseMove: function (event, el) {
		el.innerHTML = '' + this.counter++;
	}
};