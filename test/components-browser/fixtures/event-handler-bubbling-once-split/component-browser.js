module.exports = {
	onMount: function () {
		this.numOfInvocations = 0;
	},

	onceClick: function () {
		this.numOfInvocations++;
	}
};
