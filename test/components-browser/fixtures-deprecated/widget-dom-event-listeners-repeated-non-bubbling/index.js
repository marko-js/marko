module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function (state, input) {
		return {};
	},

	init: function () {
		this.counter = 0;
	},

	handleMouseMove: function (event, el) {
		el.innerHTML = '' + this.counter++;
	}
});