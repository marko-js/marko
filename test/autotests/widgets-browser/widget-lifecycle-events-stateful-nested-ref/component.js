module.exports = {
	onInput: function(input) {
		this.state = {
			name: input.name,
			messageCount: input.messageCount
		};
	},

	onMount: function() {
	}
};