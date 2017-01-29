if (typeof window !== 'undefined') {
	window.simpleWidgets = [];
}

module.exports = {
	onInput: function(input) {
		this.type = 'widget config';
		this.name = input.name;
		this.messageCount = input.messageCount;

		this.state = {
			type: 'widget state',
			name: input.name,
            messageCount: input.messageCount
		};
	},

	onMount: function() {
		window.simpleWidgets.push(this);

		this.widgetConfig = {
            type: this.type,
            name: this.name,
            messageCount: this.messageCount
        };
	}
};