module.exports = require('marko/widgets/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
		};
	},

	init: function() {
		this.mouseMoved = false;
	},

	handleMouseMove: function() {
		this.mouseMoved = true;
	}
});