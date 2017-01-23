module.exports = require('marko/widgets/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			showSimple: input.showSimple == null ? true : input.showSimple
		};
	}
});