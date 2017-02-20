module.exports = require('marko/components/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getComponentConfig: function() {
		return {
			type: 'component config'
		};
	},

	getInitialState: function() {
		return {
			type: 'component state'
		};
	},

	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	},

	init: function(componentConfig) {
		this.componentConfig = componentConfig;
	}
});