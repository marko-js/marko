module.exports = require('marko/widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function(input) {
		return {
			name: input.name,
			messageCount: input.messageCount
		};
	},

	getTemplateData: function(state, input) {
		return {
			name: state.name,
            messageCount: state.messageCount
		};
	},

	init: function() {
	}
});