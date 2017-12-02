module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function (state, input) {
		return {
			name: input.name,
			messageCount: input.messageCount
		};
	}
});