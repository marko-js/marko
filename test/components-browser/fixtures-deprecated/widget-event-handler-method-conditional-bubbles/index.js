module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function (state, input) {
		return {};
	},

	init: function () {
		this.clicked = false;
	},

	handleButtonClick: function () {
		this.clicked = true;
	}
});