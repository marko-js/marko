module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function (input) {
		return {
			name: input.name,
			messageCount: input.messageCount
		};
	},

	getTemplateData: function (state, input) {
		return {
			name: state.name,
			messageCount: state.messageCount
		};
	},

	setName: function (newName) {
		this.setState('name', newName);
	}
});