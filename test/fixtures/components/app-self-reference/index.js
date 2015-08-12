module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function (state, input) {
        var count = input.count == null ? 5 : input.count;

		return {
            count: count
        };
	}
});