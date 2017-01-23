module.exports = require('marko/widgets/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getValue: function() {
		return this.getEl('input').value;
	}
});