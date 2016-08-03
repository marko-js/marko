if (typeof window !== 'undefined') {
	window.simpleWidgets = [];
}

module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getWidgetConfig: function(input) {
		return {
			type: 'widget config',
			name: input.name,
            messageCount: input.messageCount
		};
	},

	getInitialState: function(input) {
		return {
			type: 'widget state',
			name: input.name,
            messageCount: input.messageCount
		};
	},

	getTemplateData: function(state, input) {
		return state;
	},

	init: function(widgetConfig) {
		window.simpleWidgets.push(this);

		this.widgetConfig = widgetConfig;
	}
});