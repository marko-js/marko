module.exports = {
	onMount: function () {
		this.numOfInvocations = 0;
	},

	onceMouseMove: function () {
		this.numOfInvocations++;
	}
};
