if (typeof window !== 'undefined') {
	window.simpleComponents = [];
}

module.exports = {
	onInput: function(input) {
		this.type = 'component config';
		this.name = input.name;
		this.messageCount = input.messageCount;

		this.state = {
			type: 'component state',
			name: input.name,
            messageCount: input.messageCount
		};
	},

	onMount: function() {
		window.simpleComponents.push(this);

		this.componentConfig = {
            type: this.type,
            name: this.name,
            messageCount: this.messageCount
        };
	}
};