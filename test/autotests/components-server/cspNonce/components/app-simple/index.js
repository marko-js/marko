module.exports = require('marko/widgets/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getWidgetConfig: function() {
		return {
			type: 'widget config'
		};
	},

	getInitialState: function() {
		return {
			type: 'widget state'
		};
	},

	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	},

	init: function(widgetConfig) {
		this.widgetConfig = widgetConfig;
	}
});