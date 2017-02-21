module.exports = require('marko/components/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			showSimple: input.showSimple == null ? true : input.showSimple
		};
	}
});